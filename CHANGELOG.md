# Changelog

All notable changes to the **Drag > (shift) > Drop > Import** extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Each entry lists only the headline change per release — see git history/tags for full detail.

## v1.2.1 (2026-09-03)

- Publish extension to Open VSX Registry alongside the VS Code Marketplace
- Update CI workflow to build the VSIX package once and reuse it across both marketplaces

## v1.2.0 (2026-09-03)

- Unify packaging and publishing scripts to `vsce:package` and `vsce:publish`
- Migrate toolchain to oxlint, oxfmt, and Vitest

## v1.1.1 (2024-11-27)

- engines: vscode >= 1.70.0

## v1.1.0 (2024-11-26)

- When dragging and dropping files within the same directory, keep the relative path (optional).
- l10n

## v1.0.2 (2024-11-23)

- 改了一下 README.md 和 package.json 的描述，看起来更直接一点

## v1.0.1 (2024-11-21)

- `activationEvents` 配置 `onLanguage` 增加 jsx/tsx/less 支持

## v1.0.0 (2024-11-20)

- 从 [ElecTreeFrying/drag-import-relative-path](https://github.com/ElecTreeFrying/drag-import-relative-path) 分支 fork 过来
- 不同文件类型更细粒度的导入控制
- 支持 Vue

[LICENSE.md]: https://github.com/xianghongai/drag-drop-import/blob/main/LICENSE.md
[CHANGELOG.md]: https://github.com/xianghongai/drag-drop-import/blob/main/CHANGELOG.md
[README.md]: https://github.com/xianghongai/drag-drop-import/blob/main/README.md
