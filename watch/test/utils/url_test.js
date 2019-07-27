var utils = require('../../src/url.js');

describe('getQueryString', function () {
    it('has url', function () {
        assert(utils.getQueryString('key', 'https://www.3vjia.com/?key=hello') === 'hello');
    });
    it('has url, has hash', function () {
        assert(utils.getQueryString('key', 'https://www.3vjia.com/?key=hello#footer') === 'hello');
    });
    it('current url', function () {
        assert.equal(utils.getQueryString('id'), '');
    });
});

describe('delQueryString', function () {
    it('has url', function () {
        var url = 'https://www.3vjia.com/?appId=123&testId=112233&appName=hello';
        var newUrl = utils.delQueryString('testId', url);
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123&appName=hello');
    });
    it('has url, key after "?"', function () {
        var url = 'https://www.3vjia.com/?testId=112233&appId=123&appName=hello';
        var newUrl = utils.delQueryString('testId', url);
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123&appName=hello');
    });
    it('has url, one key', function () {
        var url = 'https://www.3vjia.com/?testId=112233';
        var newUrl = utils.delQueryString('testId', url);
        assert.strictEqual(newUrl, 'https://www.3vjia.com/');
    });
    it('has url, one key, has #', function () {
        var url = 'https://www.3vjia.com/?testId=112233#footer';
        var newUrl = utils.delQueryString('testId', url);
        assert.strictEqual(newUrl, 'https://www.3vjia.com/#footer');
    });
    it('has url, more then one key, has #', function () {
        var url = 'https://www.3vjia.com/?testId=112233&appId=123#footer';
        var newUrl = utils.delQueryString('testId', url);
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123#footer');
    });
    it('has url, key not found at url', function () {
        var url = 'https://www.3vjia.com/?appId=123&testId=112233&appName=hello';
        var newUrl = utils.delQueryString('testId1', url);
        assert.strictEqual(newUrl, url);
    });
    it('has url, encode', function () {
        var url = 'https://www.3vjia.com/?redirect=' + encodeURIComponent('http://test.com?appName=微信&ch=彩蛋');
        var newUrl = utils.delQueryString('redirect', url);
        assert.strictEqual(newUrl, 'https://www.3vjia.com/');
    });
    it('current url', function () {
        var newUrl = utils.delQueryString('testId');
        assert.strictEqual(newUrl, location.href);
    });
});

describe('queryFormat', function () {
    it('empty obj', function () {
        var url = 'https://www.3vjia.com/';
        var newUrl = utils.queryFormat(url);
        assert.strictEqual(newUrl, url);
    });
    it('obj is Array', function () {
        var url = 'https://www.3vjia.com/';
        var newUrl = utils.queryFormat(url, ['one','two','three']);
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?0=one&1=two&2=three');
    });
    it('empty url', function () {
        var newUrl = utils.queryFormat(null, {a: 1});
        assert.strictEqual(newUrl, '?a=1');
    });
    it('empty url and empey obj', function () {
        var newUrl = utils.queryFormat();
        assert.strictEqual(newUrl, '');
    });
    it('url no query', function () {
        var url = 'https://www.3vjia.com/';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?a=1&b=2');
    });
    it('url has query', function () {
        var url = 'https://www.3vjia.com/?appId=123';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123&a=1&b=2');
    });
    it('url has hash', function () {
        var url = 'https://www.3vjia.com/#footer';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?a=1&b=2#footer');
    });
    it('url has hash and query', function () {
        var url = 'https://www.3vjia.com/?appId=123#footer';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123&a=1&b=2#footer');
    });
    it('url has hash and query, query has 中文', function () {
        var url = 'https://www.3vjia.com/?appId=123#footer';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2, name: '小明'});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123&a=1&b=2&name=%E5%B0%8F%E6%98%8E#footer');
    });
    it('url has hash and query, query has url', function () {
        var url = 'https://www.3vjia.com/?appId=123#footer';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2, url: 'http://baidu.com/?name=小明'});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123&a=1&b=2&url=http%3A%2F%2Fbaidu.com%2F%3Fname%3D%E5%B0%8F%E6%98%8E#footer');
    });
    it('url has hash and query, query has empty param', function () {
        var url = 'https://www.3vjia.com/?appId=123#footer';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2, aa: '', url: 'http://baidu.com/?name=小明'});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=123&a=1&b=2&url=http%3A%2F%2Fbaidu.com%2F%3Fname%3D%E5%B0%8F%E6%98%8E#footer');
    });
    it('duplicate query', function () {
        var url = 'https://www.3vjia.com/?appId=123#footer';
        var newUrl = utils.queryFormat(url, {a: 1, b: 2, appId: 234});
        assert.strictEqual(newUrl, 'https://www.3vjia.com/?appId=234&a=1&b=2#footer');
    });
});
