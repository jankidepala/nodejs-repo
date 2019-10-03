const { Readable } = require('stream');

const inStream = new Readable();

inStream.push('AAAAAAAAAAAAAAAAAAAAAAABCDEF');
inStream.push(null);
inStream.pipe(process.stdout);