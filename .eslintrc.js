/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/4/18
 *
 * 描述 ：ESLint配置类
 */
"use strict";

module.exports = {
  root: true,
  env: {
    browser: true // 浏览器环境中的全局变量。
  },
  // 对Babel解析器的包装使其与 ESLint 兼容。
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6, // 启用 ES6 语法支持
    ecmaFeatures: {
      jsx: true, // 启用 JSX
      impliedStrict: true // 启用全局严格模式
    },
    sourceType: 'module'
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'vuefix', // 自动修复规范问题
    'html'
  ],
  globals: {
    '_': true,
    'layer': true,
    'jQuery': true,
    '$': true,
    'UE': true
  },
  rules: {
    'no-global-assign': ["error", {"exceptions": ["Object", "window"]}], // 禁止对原生对象或只读的全局对象进行赋值
    'arrow-parens': 0, // 允许箭头函数参数使用括号
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0 // 允许在开发环境下使用debugger
  }
};
