/**
 * Created by YZL on 2019/7/29.^o^
 */
import { isObjectNotEmpty } from "../src";
const { expect } = require('chai');

describe('【Test isObjectNotEmpty】', () => {
  [
    {
      errorMsg: 'test null：',
      testData: null,
      expectRes: false
    },
    {
      errorMsg: 'test undefined：',
      testData: undefined,
      expectRes: false
    },
    {
      errorMsg: 'test ""',
      testData: "",
      expectRes: false
    },
    {
      errorMsg: 'test {}：',
      testData: {},
      expectRes: false
    },
    {
      errorMsg: 'test {a: 1}：',
      testData: {a: 1},
      expectRes: true
    }
  ].forEach((item) => {
    it (item.errorMsg, () => {
      expect(isObjectNotEmpty(item.testData)).eq(item.expectRes)
    })
  })

})
