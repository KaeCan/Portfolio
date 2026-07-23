// @ts-check
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default defineConfig(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: [
            'dist/**/*',
            'node_modules/**/*',
            '.astro/**/*',
            'build/**/*',
            'public/**/*',
            'studio/**/*',
            '**/*.astro',
            '*.js',
        ],
    },
    {
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        plugins: {
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        languageOptions: {
            globals: {
                browser: true,
                es2020: true,
                node: true,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
    {
        files: ['src/**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
        },
    },
    prettier
);
