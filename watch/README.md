# utils #

WEB前端工具库

[![vnpm version](https://npm.3weijia.com/badge/v/@3vjia/utils.svg?style=flat-square)](https://npm.3weijia.com/package/@3vjia/utils)
[![vnpm downloads](https://npm.3weijia.com/badge/d/@3vjia/utils.svg?style=flat-square)](https://npm.3weijia.com/package/@3vjia/utils)

## 安装 ##

	vnpm install @3vjia/utils --save

## 使用 ##

	// require后，可以直接使用
	const utils = require('@3vjia/utils');
	utils.getQueryString('key');

	// 引入单个文件（推荐用法）
	const utilsUrl = require('@3vjia/utils/src/url');
	utilsUrl.getQueryString('key');



