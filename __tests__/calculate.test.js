/**
 * Created by YZL on 2019/7/30.^o^
 */

import { add } from "../src/index";

describe('【__tests__ add】', () => {
  test('test 1+1', () => {
    expect(add(1, 1)).toBe(2)
  })
  test('test 1+', () => {
    expect(add(1, 2)).toBe(3)
  })
  test('test 1+1', () => {
    expect(add(2, 1)).toBe(3)
  })
})