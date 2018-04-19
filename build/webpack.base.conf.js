'use strict';

const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

// eslint
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/main.js'],
    vendor: ['vue', 'vue-router', 'vuex'],
    lib: ['element-ui']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': resolve('node_modules/jquery/src/jquery'),
      'layer': resolve('node_modules/layui-layer/layer'),
      'lodash': resolve('node_modules/lodash')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: eslintFriendlyFormatter, // eslint-friendly-formatter 可以让eslint的错误信息出现在终端上
          emitError: true // 如果不符合规范，触发错误
          // outputReport: {
          //   filePath: 'checkstyle.xml',
          //   formatter: resolve('node_modules/eslint/lib/formatters/checkstyle')
          // }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // { 被eslint配置替代
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: [resolve('src'), resolve('test')]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      layer: "layer",
      _: "lodash"
    })
  ]
}
