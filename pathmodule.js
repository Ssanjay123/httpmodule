const path = require('path');
const a = path.basename('C:\\temp\\myfile.html');
console.log(a)
const a2 = path.extname(__filename)
console.log(__filename,a2)