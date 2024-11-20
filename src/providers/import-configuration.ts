import { ImportStyle } from '../model';

/*
  Javascript/Javascript React/Typescript/Typescript React Import styles
  */
export const javascript: ImportStyle[] = [
  { value: 0, description: "import name from '_path_';" },
  { value: 1, description: "import { name } from '_path_';" },
  { value: 2, description: "import { default as name } from '_path_';" },
  { value: 3, description: "import * as name from '_path_';" },
  { value: 4, description: "import '_path_';" },
];

/*
  Javascript/Javascript React/Typescript/Typescript React Import styles
  */
export const typescript: ImportStyle[] = [
  { value: 0, description: "import name from '_path_';" },
  { value: 1, description: "import { name } from '_path_';" },
  { value: 2, description: "import { default as name } from '_path_';" },
  { value: 3, description: "import * as name from '_path_';" },
  { value: 4, description: "import '_path_';" },
];

/*
  CSS Import styles
  */
export const css: ImportStyle[] = [
  { value: 0, description: "@import '_path_';" },
  { value: 1, description: "@import url('_path_');" }
];

/*
  CSS image Import styles
  */
export const cssImage: ImportStyle[] = [
  { value: 0, description: "url('_path_')" }
];

/*
  CSS preprocessor, SCSS/Less Import styles
  */
export const cssPreprocessorImportImageStatement: ImportStyle[] = [
  { value: 0, description: "@import '_path_';" },
  { value: 1, description: "@import url('_path_');" },
];

/*
  CSS preprocessor, SCSS/Less image Import styles
  */
export const cssExtensionLanguageImage: ImportStyle[] = [
  { value: 0, description: "url('_path_')" }
];

/*
  HTML image Import styles
  */
export const HTMLImage: ImportStyle[] = [
  { value: 0, description: "<img src=\"_path_\" alt=\"sample\">" }
];

/*
  HTML scripts Import styles
  */
export const HTMLScript: ImportStyle[] = [
  { value: 0, description: "<script type=\"text/javascript\" src=\"_path_\"></script>" }
];

/*
  Vue Import styles
  */
export const vue: ImportStyle[] = [
  { value: 0, description: "import $1 from '_path_';" }
];

/*
  Markdown Import styles
  */
export const markdown: ImportStyle[] = [
  { value: 0, description: "[text](_path_)" }
];

/*
  Markdown (image) Import styles
  */
export const markdownImage: ImportStyle[] = [
  { value: 0, description: "![alt-text](_path_ \"Hover text\")" }
];
