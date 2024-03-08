const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/subcont/second.txt', 'utf8');

console.log(first, '\n' + second);


writeFileSync('./content/result.txt', `This is the merged text: {\n${first + '\n' + second}\n\}`, { flag: 'a' })