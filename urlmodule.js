import url from 'url'

const myURL = new URL('http://example.org')
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);