import { FileExtension } from "../model";

/*
  Supported image files extensions
  */
const supportedImages: FileExtension[] = [".gif", ".jpeg", ".jpg", ".png", ".webp", ".svg"];

/*
  Supported import file extensions to HTML
  */
export const htmlSupported: FileExtension[] = ['.js', '.css', ...supportedImages];

/*
  Supported import file extensions to Markdown
  */
export const markdownSupported: FileExtension[] = ['.md', ...supportedImages];

/*
  Supported import file extensions to CSS
  */
export const cssSupported: FileExtension[] = [".css", ...supportedImages];

/*
  Supported import file extensions to SCSS
  */
export const cssExtensionLanguageSupported: FileExtension[] = [".less", ".scss", ".css", ...supportedImages];

/**
 * Supported Vue module file extensions
 */
export const vueModule: FileExtension[] = [".js", ".ts", ".jsx", ".tsx", ".vue"];

/*
  Supported import file extensions to Vue
  */
export const vueSupported: FileExtension[] = [...vueModule, ...cssExtensionLanguageSupported];

/*
  Supported import file extensions to all languages
  */
export const permittedExts: FileExtension[] = [".css", ".less", ".scss", ".tsx", ".jsx", ".vue"];
