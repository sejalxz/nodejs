const path = require('path');
const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content);  
//         })
//     }
//     if (req.url === '/api/users') {
//         const users = [
//             {name: 'Harvey Spectar',age: 35},
//             {name: 'Mike Ross',age: 27}
//         ];
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(users));
//     }
//  });

const server = http.createServer((req, res) => {
    //Build file path
    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    
    //Extension of the file
    let extname = path.extname(filepath);

    //Initial content type
    let contentType = 'text/html';

    //Check extension type and assign content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
    }

    //Read file
    fs.readFile(filepath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            }
            else {
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`);
            }
        }
        else {
            //Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Surver running on port: ${PORT}`))