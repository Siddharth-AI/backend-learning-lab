const path = require('path');

console.log('file path :', path.dirname(__filename))
console.log('file name', path.basename(__filename))
console.log('extname', path.extname(__filename))

const pathJoin = path.join(__filename, 'user', 'documents', 'node', 'projects')
console.log(pathJoin)

const pathResolve1 = path.resolve('user', 'documents', 'node', 'projects')
const pathResolve = path.resolve()
console.log('path resolve :', pathResolve)
console.log('path resolve1 :', pathResolve1)

const filePath = path.dirname(__filename);
const pathParse = path.parse(`${filePath}/index.js`)
console.log('path parse :', pathParse)
console.log('convert path parse object back to string :', path.format(pathParse))
