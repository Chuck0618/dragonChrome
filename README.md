# 用 ReScript 复现chrome小恐龙代码
 
## 试玩地址
 http://huchq.cn:6080/dragon/index.html
 
## 主要工具
+. 这里利用了 leafer-ui
1. leafer 
2. rect
3. text 
+. 构筑工具用了 bun 
 
## bun build

```bash
bun build src/example.js --outdir=out --outfile=example.js  --target browser
```

## Installation

```sh
npm install
```

## Build

- Build: `bun run res:build`
- Clean: `bun run res:clean`
- Build & watch: `bun run res:dev`
- Release:  `bun run res`
 