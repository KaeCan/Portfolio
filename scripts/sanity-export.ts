import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const studioDir = path.join(root, 'studio');
const backupsDir = path.join(root, 'backups');

function usage(): never {
    console.error('Usage: bun run sanity:export -- <dataset>');
    console.error('Example: bun run sanity:export -- dev');
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

const dataset = process.argv[2];
if (!dataset) {
    usage();
}

if (!/^[a-z0-9_-]+$/i.test(dataset)) {
    console.error(`Invalid dataset name: ${dataset}`);
    process.exit(1);
}

await mkdir(backupsDir, { recursive: true });
const stamp = new Date().toISOString().replaceAll(':', '-').replace(/\.\d{3}Z$/, 'Z');
const destination = path.join(backupsDir, `${dataset}-${stamp}.tar.gz`);

await runSanity(['dataset', 'export', dataset, destination]);

console.log(`Exported ${dataset} → ${destination}`);
