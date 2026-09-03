import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    // src 各处直接 import 'vscode'，测试用桩件替换，让纯逻辑能在 Node 下跑
    alias: { vscode: path.resolve(import.meta.dirname, 'test/vscode.ts') },
  },
});
