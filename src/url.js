var url = require('url');
var query = require('querystring');

var _url = 'https://gooogle.com?q=bana&name=shtyu&age=19';

var u = url.parse(_url, true);
console.log(u);

console.log(u.query.q);

console.log(u.format);

//pass params into URL
var _obj ={
    name: 'shtyu',
    age: 19
}
console.log( query.stringify(_obj));

//parse url params
console.log( query.parse(_url));
