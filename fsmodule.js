const fs = require('fs');
const a = fs.writeFileSync('file2.txt','This is data3')
console.log(a)
console.log('finished reading file');