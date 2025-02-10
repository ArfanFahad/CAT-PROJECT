

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url); /*  */
    let contentType = 'text/html';
    const ext = path.extname(filePath);

    // Set content type based on file extension
    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        default:
            if (!ext) filePath += '.html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res)=>{
//     let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
//     res.end(filePath);
// })

// server.listen(3000, ()=>{
//     console.log('listening');
// });


