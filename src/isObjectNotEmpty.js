/**
 * Created by YZL on 2019/7/30.^o^
 */

export function isObjectNotEmpty(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).length !== 0
}
