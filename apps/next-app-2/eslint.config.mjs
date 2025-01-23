import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    ignores: [], // 新增忽略目錄
    rules: {
      'indent': ['error', 2, { 'MemberExpression': 1 }], // 縮排規則，使用兩個空格
      'linebreak-style': ['error', 'unix'], // 行結束樣式為 UNIX
      'quotes': ['error', 'single'], // 使用單引號
      'semi': ['error', 'always'], // 語句結尾必須有分號
      'eol-last': ['error'], // 文件末尾必須有空行
      'no-async-promise-executor': 'off', // 關閉禁止使用異步 Promise 執行器的規則
      '@typescript-eslint/no-duplicate-enum-values': 'off', // 關閉禁止重複的枚舉值的規則
      '@typescript-eslint/no-explicit-any': 'off', // 關閉禁止使用 any 類型的規則
      '@typescript-eslint/ban-ts-comment': 'off', // 關閉禁止使用 TS 註釋的規則
      'comma-dangle': ['error', 'never'], // 禁止使用尾隨逗號
      'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗號後需要空格
      'key-spacing': ['error', { 'afterColon': true }], // 冒號後需要空格
      'space-before-function-paren': ['error', { // 函數括號前的空格規則
        'anonymous': 'always', // 匿名函數需要空格
        'named': 'never', // 有名函數不需要空格
        'asyncArrow': 'always' // 非同步箭頭函數需要空格
      }],
      // 設定 ESLint 規則，禁止多行空行
      'no-multiple-empty-lines': ['error']
    }
  }
];

export default eslintConfig;
