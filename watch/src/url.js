/**
 * URL帮助类
 * Created by Mi on 2019/07/25.
 */

'use strict';

var Utils = require('./utils.js');

/**
 * 获取URL参数值
 * @param  {string} key 参数名
 * @param  {string} url 指定URL，默认为当前网页地址
 * @return {string}	 返回参数值
 */
Utils.getQueryString = function(key, url) {
  var search = '',
    hash = '';

  if (typeof url !== 'undefined') { // 如果传入了自定义链接
    var searchLastIndex = url.indexOf('#') !== -1 ? url.indexOf('#') : url.length;
    search = url.substring(url.indexOf('?'), searchLastIndex);
    hash = url.substring(searchLastIndex, url.length);
  } else { // 否则用当前页面链接
    search = window.location.search;
    hash = window.location.hash;
  }

  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  var r = (search || hash).substr(1).match(reg);

  if (r != null) return decodeURIComponent(r[2]);
  return '';
};

/**
 * 删除URL参数值
 * @param  {string} key 参数名
 * @param  {string} url 指定URL，默认为当前网页地址
 * @return {string}	 返回新URL
 */
Utils.delQueryString = function(key, url) {
  var replaceStr = '';

  if (typeof url !== 'undefined') {
    replaceStr = key + '=' + encodeURIComponent(Utils.getQueryString(key, url));
  } else {
    url = window.location.href;
    replaceStr = key + '=' + encodeURIComponent(Utils.getQueryString(key));
  }

  if (url.indexOf('?' + replaceStr) !== -1) {
    url = url.replace(replaceStr + '&', '').replace(replaceStr, '');

    if (url[url.length - 1] === '?') {
      url = url.replace('?', '');
    }

    if (url.indexOf('?#') !== -1) {
      url = url.replace('?#', '#');
    }

  } else {
    url = url.replace('&' + replaceStr, '');
  }

  return url;
};

// 格式化URL参数
Utils.queryFormat = function(url, obj) {
  typeof url !== 'string' && (url = '');

  if (typeof obj === 'object') {
    var hash = url.indexOf('#') < 0 ? '' : url.substring(url.indexOf('#'));
    var host = url.substring(0, (url.indexOf('?') < 0 ? url.length : url.indexOf('?')));
    var queryString = url.substr(host.length + 1, url.length - host.length - hash.length - 1);

		// 有hash的，还要把hash去掉才能得到纯的host
    if (hash) {
      host = host.substring(0, (host.indexOf('#') < 0 ? host.length : host.indexOf('#')));
    }

    var arrs = queryString
			.split('&')
			.filter(function(v) { return v !== ''; })
			.map(function(v) { return v.split('='); });

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && checkValue(obj[key])) {
        var flag = false;
        for (var i = 0; i < arrs.length; i++) {
          if (arrs[i][0] === key) {
            arrs[i][1] = encodeURIComponent(obj[key]);
            flag = true;
          }
        }
        if (!flag) {
          arrs.push([ key, encodeURIComponent(obj[key]) ]);
        }
      }
    }

    if (arrs.length > 0) {
      queryString = '?' + arrs.map(function(v) { return v.join('='); }).join('&');
    }

    return host + queryString + hash;
  } else {
    return url;
  }

  function checkValue(val) {
    if (val !== null && val !== undefined && val !== '') {
      return true;
    }
    return false;
  }
};

module.exports = Utils;
