# Demo: Node.js type stripping

Blog post about this repository: [“Demo: implementing a Node.js CLI app directly in TypeScript”](https://2ality.com/2025/02/nodejs-type-stripping-demo.html)

* Requires [Node.js v23.6.0](https://nodejs.org/en/blog/release/v23.6.0) or later.
* All the TypeScript code in this repository is run directly by Node.js, via [type stripping](https://nodejs.org/api/typescript.html).
* Limitation: Type stripping is not supported in dependencies (“inside `node_modules`”). Therefore, we can write apps and bin scripts directly in TypeScript but not libraries.

## Features used in this repository

* Node’s built-in [test runner](https://nodejs.org/api/test.html)
* [`util.parseArgs()`](https://nodejs.org/api/util.html#utilparseargsconfig)
* [`util.styleText()`](https://nodejs.org/api/util.html#utilstyletextformat-text-options)
* Importing JSON with import attributes:
  ```ts
  import pkg from '../package.json' with { type: 'json' };
  ```

## Using `src/playground.ts` as a simple TypeScript playground

* `npm run play`
* Edit `src/playground.ts`. Whenever you save that file, Node.js runs it again and displays its output.

More information: 2ality blog post [“Simple TypeScript playground via `node --watch`”](https://2ality.com/2025/02/node-watch-typescript-playground.html)

## Running the CLI app

`npm install` is only required if you need `@types/node` with types for Node.js APIs during editing.

```
cd nodejs-type-stripping/
node src/twice.ts
```

Alternative on Unix that hides ExperimentalWarning:

```
cd nodejs-type-stripping/
chmod u+x src/twice.ts
./src/twice.ts
```

## Installing the CLI app globally

```
npm install -g nodejs-type-stripping/
```

After that, the following global command is available: `twice`

## Working on this repository

Type-checking all of the code (no files are emitted due to `"noEmit":true` in `tsconfig.json`):

```
tsc
```

Running the unit tests (via `package.json > scripts > test`):

```
npm t
```

## Publishing this repository to npm

**Important:** Node.js does not support TypeScript in library packages (that are dependencies of other packages). But you can use it to write CLI apps and upload those to npm.

* Remove `"private"` from `package.json` (this setting currently prevents publishing to npm).
* Update or add various properties a necessary – especially a `"name"` and a `"version"`.
* How to publish a package to npm: chapter [“Creating cross-platform shell scripts”](https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html) of “Shell scripting with Node.js”

## More information

* [“Modules: TypeScript”](https://nodejs.org/api/typescript.html) in the Node.js documentation
* Blog post [“Node’s new built-in support for TypeScript”](https://2ality.com/2025/01/nodejs-strip-type.html) on 2ality.com
* Blog post [“A guide to `tsconfig.json`”](https://2ality.com/2025/01/tsconfig-json.html) on 2ality.com
* Book (free online) [“Shell scripting with Node.js”](https://exploringjs.com/nodejs-shell-scripting/) by Axel Rauschmayer
