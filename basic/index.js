console.log("wrapper in index.js");
const wrapperDemo = require('./wrapper-demo');
console.log("filename in index.js :", __filename);
console.log("dirname in index.js :", __dirname);

wrapperDemo.greet("siddharth")

//? what is node module system?
// nodejs is a runtime environment that allows you to run javascript code outside of the browser. it has its own module system that allows you to organize your code into reusable pieces called modules.
// a module is a file that contains code that can be reused in other files. nodejs
// module system allows you to organize your code to multiple reusable pieces of modules. you will be creating multiple modules and then each file in nodejs will be treated as a separate module.
// nodejs uses commonjs module system, which means that each file is treated as a separate module and you can export and import code from other modules using require() and module.exports.
//? what is require?
// require is a function that allows you to import code from other modules. it takes a string as an argument, which is the path to the module you want to import. it returns the exported code from that module.
//? what is module.exports?
// module.exports is an object that allows you to export code from a module. you can add properties and methods to this object, which will be available to other modules that import this module.
//? what is __dirname and __filename?
// __dirname is a global variable that contains the absolute path to the directory that contains the current module. it is useful for constructing paths to other files in the same directory.
// __filename is a global variable that contains the absolute path to the current module file. it is useful for constructing paths to other files in the same directory or for logging purposes.
//? what is global object?
// global is a global object that contains all the global variables and functions in nodejs. it is similar to the window object in the browser. you can add properties and methods to this object, which will be available to all modules in your application.
//? what is process object?
// process is a global object that provides information about the current Node.js process. it allows you to access information such as the command-line arguments, environment variables, and the current working directory. It also provides methods for controlling the process, such as exiting the process or handling signals.
//? what is console object?
// console is a global object that provides methods for logging information to the console. It is similar to the console object in the browser. You can use it to log messages, errors, and warnings to the console.
//? what is buffer?
// buffer is a global object that allows you to work with binary data in Node.js. It provides methods for creating, manipulating, and converting binary data. Buffers are used to handle raw binary data, such as reading and writing files, network communication, and more.
//? what is event emitter?
// event emitter is a global object that allows you to create and handle events in Node.js.
// It provides a way to create custom events and listen for them. You can use it to create event-driven applications, where different parts of your application can communicate with each other by emitting and listening for events.
//? what is npm?
// npm (Node Package Manager) is a package manager for Node.js that allows you to install, manage, and share packages (libraries, tools, and other code) in your Node.js applications. It is the default package manager for Node.js and is used to install and manage third-party packages from the npm registry.
// npm allows you to easily install and manage dependencies for your Node.js projects, as well as run scripts defined in your package.json file. It provides a command-line interface for managing packages, including installing, updating, and removing packages.
//? what is package.json?
// package.json is a file that contains metadata about your Node.js project, including its name,
// version, description, dependencies, devDependencies, scripts, and other information. It is used by npm to manage your project's dependencies and to provide information about your project to other developers.
// The package.json file is created when you run the npm init command, which prompts you for information about your project and generates the file. It is a crucial part of any Node.js project, as it allows you to manage your project's dependencies and scripts easily.
//? what is npm?
// we can install and manage thied party packages like librarys and tools and everything. we can manage our project dependencies, and run scripts defined in our package.json file.
// npm install package_name
// npm uninstall package_name
// npm update package_name
// npm run script_name

//? what is package.json
// it manage our dependencie and dev-dependencie and it contains metadata about our project .
// (dependencie are packages that is actually required for our project run in production and dev dependencies is only needed for our local development)
// create package.json => npm init
// project name => --
// version:
// description:
// entry point:
// test command:
// git repo:
// keywords:
// author:
// license:(ISC)

//? what is node_modules folder?
// node_modules folder is where all the installed packages and their dependencies are stored. when you install a package using npm, it creates a folder called node_modules in your project directory and installs the package and its dependencies in that folder. this allows you to use the installed packages in your project without having to worry about their dependencies or versions.
// the node_modules folder can become quite large, as it contains all the installed packages and their dependencies. it is important to note that you should not manually modify the contents of the node_modules folder, as it is managed by npm and any changes you make may cause issues with your project.
//? what is npm registry?
// npm registry is a public repository of packages that can be installed using npm. it is a central location where developers can publish and share their packages with the community. when you run npm install, npm fetches the package from the npm registry and installs it in your project.
// the npm registry contains millions of packages, ranging from small utility libraries to large frameworks and tools. you can search for packages on the npm website or using the npm command-line interface. you can also publish your own packages to the npm registry, making them available to other developers.
//? what is npm scripts?
// npm scripts are commands that can be run using npm. they are defined in the package.json file under the "scripts" section. npm scripts allow you to automate tasks in your Node.js project, such as running tests, building your project, or starting a development server.
// you can define custom scripts in your package.json file and run them using the npm run command. for example, you can define a script called "start" that runs your application, and then run it using npm run start. npm scripts can also use other npm packages as dependencies, allowing you to create complex workflows and automate tasks in your project.
//? what is npm init?
// npm init is a command that initializes a new Node.js project by creating a package.json file. it prompts you for information about your project, such as its name, version, description, entry point, test command, git repository, keywords, author, and license. once you provide the required information, it generates a package.json file in your project directory.
// this file contains metadata about your project and is used by npm to manage your project's dependencies and scripts. it is an essential step in setting up a new Node.js project, as it allows you to define your project's dependencies and scripts, making it easier to manage and share your project with others.
//? what is npm install?
// npm install is a command that installs packages and their dependencies in your Node.js project. it can be used to install both local and global packages. when you run npm install, it reads the package.json file in your project directory and installs the listed dependencies in the node_modules folder.
// if you want to install a specific package, you can run npm install package_name, which will install the package and add it to your package.json file as a dependency. you can also use npm install --save-dev package_name to install a package as a dev dependency, which is only needed for local development.
// if you want to install all the dependencies listed in your package.json file, you can simply run npm install without any arguments. this will install all the dependencies and dev dependencies in your project.
// npm install can also be used to update packages, remove packages, and run scripts defined in your package.json file. it is a powerful command that is essential for managing your Node.js project and its dependencies.


