/**
 * vscode API 桩件：只实现 src 在模块加载期就会用到的部分。
 * getConfiguration().get 一律返回调用方传入的默认值，测试因此断言的是清单里的默认配置行为。
 */

export const workspace = {
  getConfiguration() {
    return {
      get<T>(_section: string, defaultValue: T): T {
        return defaultValue;
      },
    };
  },
  onDidChangeConfiguration() {
    return { dispose() {} };
  },
};
