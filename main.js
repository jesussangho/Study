var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;

    if (pathname === "/") {
        if (queryData.id === undefined) {
            var title = "Welcome";
            var description = "Hello, Node.js";
            var template = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sangho ${title}</title>
            </head>
            <body>
                <h1><a href="/">Web Study</h1>
                <ul>
                    <li><a href="/?id=home">home</a></li>
                    <li><a href="/?id=Portfolio">Portfolio</a></li>
                    <li><a href="/?id=About">About</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
        } else {
            fs.readFile(
                `data/${queryData.id}`,
                "utf-8",
                function (err, description) {
                    var title = queryData.id;
                    var template = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sangho ${title}</title>
                </head>
                <body>
                    <h1><a href="/">Web Study</h1>
                    <ul>
                        <li><a href="/?id=home">home</a></li>
                        <li><a href="/?id=Portfolio">Portfolio</a></li>
                        <li><a href="/?id=About">About</a></li>
                    </ul>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body>
                </html>
            `;
                    response.writeHead(200);
                    response.end(template);
                }
            );
        }
    } else {
        response.writeHead(404);
        response.end("Not Found");
    }
});
app.listen(3000);
