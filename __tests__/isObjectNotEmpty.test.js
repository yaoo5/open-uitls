/**
 * Created by YZL on 2019/7/30.^o^
 */

import { isObjectNotEmpty } from "../src/index";

describe('【__tests__ isObjectNotEmpty】', () => {
  test('test null', () => {
    expect(isObjectNotEmpty(null)).toBe(false)
  })
  test('test undefined', () => {
    expect(isObjectNotEmpty(undefined)).toBe(false)
  })
  test('test emptyStr', () => {
    expect(isObjectNotEmpty("")).toBe(false)
  })
  test('test {}', () => {
    expect(isObjectNotEmpty({})).toBe(false)
  })
  test('test []', () => {
    expect(isObjectNotEmpty([])).toBe(false)
  })
  test('test {a:1}', () => {
    expect(isObjectNotEmpty({a:1})).toBe(true)
  })
})
