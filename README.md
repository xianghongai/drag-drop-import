<p>
  <h1 align="center">Drag --(shift)--> Drop --> Import</h1>
</p>

<p align="center">
  <a href="https://github.com/xianghongai/drag-drop-import">
    <img src="https://img.shields.io/github/repo-size/xianghongai/drag-drop-import?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.drag-drop-import">
    <img src="https://img.shields.io/visual-studio-marketplace/v/NicholasHsiang.drag-drop-import?color=%234ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.drag-drop-import">
    <img src="https://img.shields.io/visual-studio-marketplace/d/NicholasHsiang.drag-drop-import?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.drag-drop-import">
    <img src="https://img.shields.io/visual-studio-marketplace/r/NicholasHsiang.drag-drop-import?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.drag-drop-import">
    <img src="https://img.shields.io/github/license/xianghongai/drag-drop-import?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
</p>

Fork: 🎉 Here ← [ElecTreeFrying/drag-import-relative-path](https://github.com/ElecTreeFrying/drag-import-relative-path) 🫰.

## Usage / 使用方法

1. **Drag** supported files from the tree view.
2. Hold `shift`
3. **Drop** them into any of your active editors.

--

1. 在侧边资源管理器中，鼠标左键拖着文件不松开
2. 按住 `shift`
3. 拖到编辑器中导入位置，松开鼠标，完成导入

## Example / 示例

![Vue](assets/example/vue.gif)

![SCSS](assets/example/scss.gif)

![Markdown](assets/example/md.gif)

## Supported file extensions / 支持的文件类型

| Drop         | Drag                                                                                                                       |
|--------------|----------------------------------------------------------------------------------------------------------------------------|
| `.vue`       | `.vue`<br>`.js`<br>`.json`<br>`.css`, `.sass`, `.scss`, `.less`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`        |
| `.js`, `.ts` | `.js`, `.ts`<br>`.json`<br>`.css`, `.sass`, `.scss`, `.less`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`           |
| `.jsx`       | `.jsx`<br>`.js`<br>`.json`<br>`.css`, `.sass`, `.scss`, `.less`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`        |
| `.tsx`       | `.tsx`<br>`.ts`, `.js`<br>`.json`<br>`.css`, `.sass`, `.scss`, `.less`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp` |
| `.css`       | `.css`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`                                                                 |
| `.scss`      | `.scss`<br> `.css`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`                                                     |
| `.html`      | `.js`<br>`.css`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`                                                        |
| `.md`        | `.md`<br>`.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`                                                                  |

## Settings / 设置

- `dragDropImport.importStatements.pathMappings`, Path mappings configuration/路径映射配置，默认配置适配了 [Vue CLI / URL 转换规则](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#url-%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99)
- `dragDropImport.importStatements.pathStyle`, Path style configuration/路径风格配置 (支持别名路径、相对路径)

## License 📃

MIT License

## Donate 🎉

![xianghongai@gmail.com](https://raw.githubusercontent.com/caringrun/assets/master/donate.png)

Powered By [Cursor](https://www.cursor.com/) 💝
