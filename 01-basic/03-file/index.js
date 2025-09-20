/**

//! Working with Files in Node.js

//? Node.js provides the fs (File System) module to interact with the file system, allowing you to read, write, update, delete, and manipulate files.

//? The fs module is a core module, so no installation is needed
//? Checking if a File Exists (fs.existsSync)
//? Renaming a File (fs.rename)
//? Deleting a File (fs.unlink)
//? writeFile, appendFile, mkdir(make a folder),readFile

*/

const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder)
  console.log('data folder created')
}

const filePath = path.join(dataFolder, 'example.txt');

//synac way of creating the file

fs.writeFileSync(filePath, "hello from siddharth");
console.log("file created successfully");

// read content from file

const readContentFromFile = fs.readFileSync(filePath, "utf-8")
console.log("file content : ", readContentFromFile)

// append to the file update the file

fs.appendFileSync(filePath, "\nthis is new file content added")
console.log("new content added")

//async way of creating the file

const asyncFilePath = path.join(dataFolder, "async-example.txt")
fs.writeFile(asyncFilePath, 'hello, async node js', (err) => {
  if (err) throw err;
  console.log("async file is created successfully")
})

fs.readFile(asyncFilePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log("async file content :", data);
  fs.appendFile(asyncFilePath, '\nthis is another line added', (err) => {
    if (err) throw err;
    console.log("new line added to async file")
    fs.readFile(asyncFilePath, 'utf-8', (err, updateData) => {
      if (err) throw err;
      console.log("updated file content:", updateData)
    })
  })
})