# React China new Forum Frontend

[![Build Status][travis-ci-image]][travis-ci-url]

[![Gitter chat][gitter-image]][gitter-url] 
[![GitHub license][license-image]][license-url] 

[![dependencies][dependencies-image]][dependencies-url]
[![devDependency][dev-deps-image]][dev-deps-url]
[![peerDependency][peer-deps-image]][peer-deps-url]

----

> React 中文社区 React.js 版前端界面

## 状态

> 正在初始化项目

## 计划

* 完成 JSX 基本开发框架
* 梳理 Discourse API
* 制定 Actions, Store, Router 规范
* 完成顶层组件
* 组件细化

## Develop

```text
npm i
```

You need a static file server for the HTML files. Personally I suggest using Nginx.

Develop:

```bash
gulp html # regenerate index.html
webpack-dev-server --hot # enable live-reloading
```

Build (Pack and optimize js, reivision js and add entry in `index.html`):

```bash
gulp build
```

## Usage

#### `npm run clean`
Remove folder `./build`

#### `npm run dev`
Runs the webpack build system just like in `compile` but enables HMR and react hot-loader. The webpack dev server can be found at `localhost:3000`.

#### `npm run dev:debug`
Same as `npm run dev` but enables `--debug` flag automatically.

#### `npm run dev:quiet`
Same as `npm run dev` but disables verbose debugging information.

#### `npm run compile`
Runs the Webpack build system with your current NODE_ENV and compiles the application to disk (`~/build`).

#### `npm run test`
Runs all tests for the application.

#### `npm run test:unit`
Similar to `npm run test`, but only runs unit tests. In development mode this will run in watch mode and re-run individual test files when they change.

#### `npm run test:e2e`
*TODO*

## Contribution

- If you want to discuss something or just need help, here is our [gitter.im room](https://gitter.im/react-china/forum-frontend).
- Have an idea? Found a bug? See [how to contribute][contributing-url].

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

[contributing-url]: /CONTRIBUTING.md

[gitter-url]: https://gitter.im/react-china/forum-frontend
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg

[license-image]: https://img.shields.io/github/license/mashape/apistatus.svg
[license-url]: http://www.opensource.org/licenses/mit-license.php

[travis-ci-image]: https://travis-ci.org/react-china/forum-frontend.svg
[travis-ci-url]: https://travis-ci.org/react-china/forum-frontend

[dependencies-image]: https://david-dm.org/react-china/forum-frontend.svg
[dependencies-url]: https://david-dm.org/react-china/forum-frontend

[dev-deps-image]: https://david-dm.org/react-china/forum-frontend/dev-status.svg
[dev-deps-url]: https://david-dm.org/react-china/forum-frontend#info=devDependencies

[peer-deps-image]: https://david-dm.org/react-china/forum-frontend/peer-status.svg
[peer-deps-url]: https://david-dm.org/react-china/forum-frontend#info=peerDependencies
