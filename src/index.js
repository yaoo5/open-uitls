/**
 * Created by YZL on 2019/7/27.^o^
 */

export function isObjectNotEmpty(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).length !== 0
}

export function print() {
  console.log('It\'s print function');
}