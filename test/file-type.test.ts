import assert from 'node:assert/strict';
import { test } from 'vitest';
import { getFileExt, removeFileExt } from '../src/utilities/file-extension';
import { getFileType } from '../src/utilities/file-type';

test('getFileExt 与 removeFileExt 互为反向', () => {
  assert.equal(getFileExt('/project/src/utils/format.ts'), '.ts');
  assert.equal(removeFileExt('../utils/format.ts'), '../utils/format');
});

/** 扩展名到导入形态的映射，未列出的一律按图片处理 */
test('getFileType 按扩展名归类', () => {
  const cases: Record<string, string> = {
    'a.js': 'script',
    'a.jsx': 'script',
    'a.ts': 'script',
    'a.tsx': 'script',
    'a.css': 'stylesheet',
    'a.scss': 'stylesheet',
    'a.less': 'stylesheet',
    'a.vue': 'vue',
    'a.md': 'markdown',
    'a.html': 'html',
    'a.png': 'image',
  };

  for (const [filePath, fileType] of Object.entries(cases)) {
    assert.equal(getFileType(filePath), fileType, filePath);
  }
});
