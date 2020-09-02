<h1 align="center">react-summer-start 🚀</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D10.0.0-blue.svg" />
  <a href="https://github.com/Xiaolong96/notes/issues/6" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Customized react typescript template without ejecting.

## 特点

### Create React App 无 eject 配置覆盖

使用 [craco](https://github.com/gsoft-inc/craco)，在项目的根目录下添加 `craco.config.js` 文件修改 webpack 配置

### Lint

项目模版构建了一套代码规范化的检查工作流

- prettier
- eslint
- stylelint
- editorconfig
- husky & lint-staged

`git commit` 时触发 git hooks 检查校验暂存区代码，通过方可提交

可运行 `npm run lint:fix` 进行可以代码校验和修复

### TypeScript

用 TypeScript 来作为默认的开发语言，降低开发成和维护成本

1. 定义接口数据

推荐在 `src/pages/**/type.d.ts` 中定义接口数据的类型，以用户基本信息为例：

```ts
declare namespace API {
  // 用户基本信息
  export interface CurrentUser {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
      key: string;
      label: string;
    }[];
    userid?: string;
    access?: 'user' | 'guest' | 'admin';
    unreadCount?: number;
  }
}
```

`d.ts` 结尾的文件会被 TypeScript 默认导入到全局，导入其它声明文件需要使用三斜线指令

2. 可选链操作符

typescript 3.7 版本之后已经支持

当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。

`obj?.xxx` obj 不存在时表达式短路返回值是 undefined

### 配置式路由和权限

### 请求和数据流

### 布局

### 单元测试

### 国际化

### 移动端支持

## 新增页面格式

```
page
├── components
│   └── Com
├── type.d.ts
├── index.tsx
├── service.ts
└── style.less
```

## Prerequisites

- node >=10.0.0

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run lints

```sh
npm run lint
npm run lint-staged
npm run lint:fix // 校验代码并自动修复
```

## Run tests

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!
