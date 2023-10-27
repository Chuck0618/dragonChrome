# 这里我们放一些 ReScript 代码
 
The only official ReScript starter template. Clone this repo to get started.

This is the branch where you can use your output code in NodeJS. To use your output in the browser, do `git checkout -b browser origin/browser` to switch to the `browser` branch.

## bun build

```bash
bun build src/example.js --outdir=out --outfile=exa
mple.js  --target browser
```

## Installation

```sh
npm install
```

## Build

- Build: `npm run res:build`
- Clean: `npm run res:clean`
- Build & watch: `npm run res:dev`

## Run

```sh
node src/Demo.bs.js
```
