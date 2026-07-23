import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { access } from 'node:fs/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const studioDir = path.join(root, 'studio');

function usage(): never {
    console.error(
        'Usage: bun run sanity:import -- <backup.tar.gz> <dataset> --yes'
    );
    console.error(
        'Example: bun run sanity:import -- backups/dev.tar.gz production --yes'
    );
    console.error(
        'Rewrites the target dataset to match the backup (delete → create → import).'
    );
    process.exit(1);
}

async function runSanity(args: string[]): Promise<void> {
    const proc = Bun.spawn(['bunx', 'sanity', ...args], {
        cwd: studioDir,
        stdout: 'inherit',
        stderr: 'inherit',
        stdin: 'inherit',
    });
    const code = await proc.exited;
    if (code !== 0) {
        process.exit(code);
    }
}

const backupArg = process.argv[2];
const dataset = process.argv[3];
const confirmed = process.argv.includes('--yes');

if (!backupArg || !dataset || !confirmed) {
    usage();
}

if (!/^[a-z0-9_-]+$/i.test(dataset)) {
    console.error(`Invalid dataset name: ${dataset}`);
    process.exit(1);
}

const backupPath = path.isAbsolute(backupArg)
    ? backupArg
    : path.resolve(root, backupArg);

try {
    await access(backupPath);
} catch {
    console.error(`Backup not found: ${backupPath}`);
    process.exit(1);
}

console.log(`Rewriting dataset "${dataset}" from ${backupPath}`);

await runSanity(['dataset', 'delete', dataset, '--force']);
await runSanity(['dataset', 'create', dataset, '--visibility', 'public']);
await runSanity(['dataset', 'import', backupPath, dataset, '--replace']);

console.log(`Imported ${backupPath} → ${dataset}`);
