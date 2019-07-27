/**
 * WEB前端工具库
 * Created by Mi on 2019/07/25.
 */

'use strict';

var Utils = {
  /**
   * 大数计算
   * @param  {string} a 数字字符串
   * @param  {string} b 数字字符串
   * @return {string}	 返回参数值
   */
  sumBigNumber: function(a, b) {
    var res = '',
    temp = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
      temp += ~~a.pop() + ~~b.pop();
      res = (temp % 10) + res;
      temp = temp > 9 ? 1 : 0;  // 满10进1
    }
    return res.replace(/^0+/, '');
  },
  
  /**
   * 判断是否对象，并且为非空和非{}
   * @param  {number|string|array...} a 任何参数
   * @return {boolean}
   */
  isObjectNotEmpty: function(a) {
    if (typeof a === 'object' && !(a instanceof Array)) {
      for (var i in a) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

};

module.exports = Utils;
