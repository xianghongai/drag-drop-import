import assert from 'node:assert/strict';
import { test } from 'vitest';
import { getAliasPath, getFileDir, getFileName, getPath, getRelativePath } from '../src/utilities/file-path';

/** 同目录：sameDirKeepRelative 默认开启，无论 pathStyle 如何都保持相对路径 */
test('同目录内保持相对路径', () => {
  const dragFilePath = '/project/src/views/Detail.vue';
  const dropFilePath = '/project/src/views/Home.vue';
  assert.equal(getPath({ dragFilePath, dropFilePath }), './Detail.vue');
});

/** 跨目录：pathStyle.general 默认 alias，命中 '@' → 'src' 映射 */
test('跨目录按别名映射改写', () => {
  const dragFilePath = '/project/src/components/Button.vue';
  const dropFilePath = '/project/src/views/Home.vue';
  assert.equal(getPath({ dragFilePath, dropFilePath }), '@/components/Button.vue');
});

/** 样式表之间：pathStyle.styleSheet2styleSheet 默认 relative，走独立分支 */
test('样式表之间用相对路径', () => {
  const dragFilePath = '/project/src/styles/variables.scss';
  const dropFilePath = '/project/src/pages/home.scss';
  assert.equal(getPath({ dragFilePath, dropFilePath }), '../styles/variables.scss');
});

/** node_modules 优先于其余分支，'~' 映射不补斜杠 */
test('node_modules 走 ~ 别名且不补斜杠', () => {
  const dragFilePath = '/project/node_modules/normalize.css/normalize.css';
  const dropFilePath = '/project/src/pages/home.scss';
  assert.equal(getPath({ dragFilePath, dropFilePath }), '~normalize.css/normalize.css');
});

test('getRelativePath 可去掉扩展名', () => {
  const relativePath = getRelativePath('/project/src/views/Home.vue', '/project/src/utils/format.ts', false);
  assert.equal(relativePath, '../utils/format');
});

test('getAliasPath 未命中映射时原样返回', () => {
  assert.equal(getAliasPath('/elsewhere/lib/index.ts'), '/elsewhere/lib/index.ts');
});

test('getFileName 与 getFileDir 取名与所在目录', () => {
  assert.equal(getFileName('/project/src/components/Button.vue'), 'Button');
  assert.equal(getFileDir('/project/src/components/Button.vue'), 'components');
});
