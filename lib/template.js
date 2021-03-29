module.exports = {
    html: function (title, list, body, control) {
        return `
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
            ${list}
            ${control}
            ${body}
        </body>
        </html>
        `;
    },
    list: function (filelist) {
        var list = "<ul>";
        var i = 0;
        while (i < filelist.length) {
            list =
                list +
                `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
        }
        list = list + "</ul>";
        return list;
    },
};
