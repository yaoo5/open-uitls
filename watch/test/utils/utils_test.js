var utils = require('../../src/utils.js');

describe('isObjectNotEmpty', function () {
  it('number', function () {
    assert(utils.isObjectNotEmpty(123) === false);
  });
  it('Array', function () {
    assert(utils.isObjectNotEmpty([1, 2]) === false);
  });
  it('{}', function () {
    assert(utils.isObjectNotEmpty({}) === false);
  });
  it('function', function () {
    assert(utils.isObjectNotEmpty(console.log) === false);
  });
  it('string', function () {
    assert(utils.isObjectNotEmpty('123') === false);
  });
  it('boolean', function () {
    assert(utils.isObjectNotEmpty(true) === false);
  });
  it('blank', function () {
    assert(utils.isObjectNotEmpty(' ') === false);
  });
  it('object', function () {
    assert(utils.isObjectNotEmpty({
      a: 1
    }) === true);
  });
  it('object', function () {
    assert(utils.isObjectNotEmpty({
      a: 1,
      b: {
        bb: 22
      }
    }) === true);
  });
});