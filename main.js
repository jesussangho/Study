var http = require("http");
var fs = require("fs");
var url = require("url"); // require : 요구하다

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    // nodejs url parse query string : nodejs url 쿼리 분석
    var title = queryData.id;
    console.log(queryData.id);
    if (_url === "/") {
        title = "Welcome";
    }
    if (_url === "/favicon.ico") {
        return response.writeHead(404);
    }
    response.writeHead(200);
    // console.log(__dirname + _url);
    // response.end(fs.readFileSync(__dirname + _url));
    // response.end("sangho : " + _url);
    fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
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
            <h1><a href="/?id=welcome">Web Study</h1>
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
        response.end(template);
    });
});
app.listen(3000);
