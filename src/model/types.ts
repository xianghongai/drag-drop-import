type HTMLFileExtension = '.html';

type YAMLFileExtension = '.yaml' | '.yml';

type MarkdownFileExtension = '.md';

type StylesheetFileExtension = '.css' | '.scss' | '.less';

type ScriptFileExtension = '.ts' | '.tsx' | '.js' | '.jsx';

type ImageFileExtension = '.gif' | '.jpeg' | '.jpg' | '.png' | '.webp' | '.svg';

type FontFileExtension = '.woff' | '.woff2' | '.ttf' | '.eot';

type WebFileExtension = HTMLFileExtension | StylesheetFileExtension | ImageFileExtension | FontFileExtension | YAMLFileExtension | MarkdownFileExtension;

type DataFileExtension = '.json';

type VueFileExtension = '.vue';

export type FileExtension = WebFileExtension | ScriptFileExtension | DataFileExtension | VueFileExtension;

export type FileType = 'script' | 'stylesheet' | 'image' | 'vue' | 'markdown' | 'html';
