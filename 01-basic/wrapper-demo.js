console.log("wrapper in wrapper-demo.js")

console.log("filename in wrapper-demo : ", __filename);
console.log("dirname in wrapper-demo : ", __dirname);

module.exports.greet = (name) => console.log(`hello ${name}`);


//? what is module wrapper
// in nodejs every module is wrapped in a function before it executed and this wrapper function we called as a module wrapper.
// how its works => this function has some of the parameters like exports require just like we see module file name and the directoryname. which file are getting rendered
/**
=> module wrapper
  (
    function(export,require,module,__filename,__dirname){
      // your module code goes here
    }
  )
*/

//? what is module wrapper function?
// module wrapper function is a function that wraps the code of a module in Node.js. It is used to create a separate scope for each module, allowing you to define variables and functions that are not accessible outside of the module. This helps to prevent naming conflicts and keeps the global scope clean.
// The module wrapper function takes the following parameters:
// - exports: an object that is used to export values from the module.
// - require: a function that is used to import other modules.
// - module: an object that represents the current module.
// - __filename: a string that contains the absolute path to the current module file.
// - __dirname: a string that contains the absolute path to the directory that contains the current module file.
// The module wrapper function is automatically applied to each module in Node.js, so you don't need to define it yourself. However, you can use the parameters provided by the module wrapper function to export values from your module, import other modules, and access information about the current module file and directory.

//? what is module.exports?
// module.exports is an object that is used to export values from a module in Node.js.
// It allows you to define properties and methods that can be accessed by other modules that import this module. When you assign a value to module.exports, it becomes the exported value of the module.
// For example, you can export a function, an object, or any other value using module
// .exports. Other modules can then import this value using the require() function.
