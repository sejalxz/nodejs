//File System
const fs = require('fs');
const path = require('path');

// mkdir : creates a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err)
//         throw err;
//     console.log('Folder created successfully....');
// })

// writeFile : Create a file and write in it. Overwrites existing content.
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//     if (err)
//         throw err;
//     console.log('Created and written to a file successfully....');
// })

// appendFile : Append to file. We've written here inside writeFile cus node is asynchrnous
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//     if (err)
//         throw err;
//     console.log('Created and written to file successfully....');

//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I love Node.js', err => {
//         if (err)
//             throw err;
//         console.log('Appended to file successfully....');
//     })
// })

// readFile : reads content of the file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err)
//         throw err;
//     console.log('File read successfully....');
//     console.log("Data: ", data);
// })

//rename : Renames the file
fs.rename(
    path.join(__dirname, 'test', 'hello.txt'),
    path.join(__dirname, 'test', 'helloworld.txt'),
    err => {
        if (err)
            throw err;
        console.log('File renamed successfully....');
    }
)