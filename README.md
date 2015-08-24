
React China new Forum Frontend
----

> React 中文社区 React.js 版前端界面

### 状态

> 正在初始化项目

### 计划

* 完成 JSX 基本开发框架
* 梳理 Discourse API
* 制定 Actions, Store, Router 规范
* 完成顶层组件
* 组件细化

### Develop

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

### License

MIT
