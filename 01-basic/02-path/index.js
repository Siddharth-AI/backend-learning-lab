/**
//! Path module--------------

//? The path module in Node.js provides utilities for working with file and directory paths. It helps in handling and transforming file paths in a cross-platform way.

//? The path module is a core module, so you don't need to install it separately. You can import it using:
// const path = require('path');

//? Common path Methods

//* 1. path.join([...paths])
**     Joins multiple path segments into a single path.

//* 2. path.resolve([...paths])
**     Returns an absolute path by resolving the given path segments.

//* 3. path.parse(path)
**     Returns an object with details about the path.

//* 4. path.format(pathObject)
**     Converts a path.parse() object back into a string.

//* 5. path.normalize(path)
//**     Normalizes a given path, resolving '..' and '.' segments.

//* 6. path.extname(path)
**     Returns the extension of the given path.

//* 7. path.basename(path[, ext])
**     Returns the last portion of a path, optionally removing the extension.

//* 8. path.dirname(path)
**     Returns the directory name of a path.

//* 9. path.sep
**     Returns the platform-specific path segment separator (e.g., '/' on POSIX, '\' on Windows).

//* 10. path.delimiter
**     Returns the platform-specific path delimiter (e.g., ':' on POSIX, ';' on Windows).

//* 11. path.isAbsolute(path)
**     Checks if the given path is an absolute path.

//* 12. path.relative(from, to)
**     Returns the relative path from one path to another.
*/


const path = require('path');

console.log("file path :", path.dirname(__filename)); //? file path----
console.log("file name :", path.basename(__filename)); //? file name------
console.log("file extension :", path.extname(__filename)); //? file extension-----

//? we can combine multiple path segments into one and create one absolute path or relative path also

const joinPath = path.join('/user', 'documents', 'node', 'projects');
console.log("join path :", joinPath)

//? we can also resolve some path 

const resolvePath = path.resolve('user', 'documents', 'node', 'projects');
const resolvePath1 = path.resolve();
console.log("resolve path :", resolvePath)
console.log("resolve path1 :", resolvePath1)

//? normalize path (its simpilfing the path)

const normalizePath = path.normalize('/user/.document/../node/projects');
console.log("normalize path :", normalizePath)

//? path parse

const dataFolder = path.dirname(__filename)
const pathParse = path.parse(`${dataFolder}/index.js`)
console.log('Path parse : ', pathParse)

//? convert this is again normal by path format

console.log('convert path parse object back to string : ', path.format(pathParse))