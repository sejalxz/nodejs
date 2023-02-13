const path = require('path');

//Basename : gets base file name
console.log(__filename);
console.log(path.basename(__filename));

//Dirname : gets the name of directory
console.log("Directory name: ",__dirname);
console.log("File name: ", path.dirname(__filename));

//Extname : gets the extension of the file
console.log(path.extname(__filename));

//Parse : creates path object
console.log(path.parse(__filename)); 

//Join : returns concatenated paths
console.log(path.join(__dirname, 'test', 'hello.js'));