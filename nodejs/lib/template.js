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
    list: function (topics) {
        var list = "<ul>";
        var i = 0;
        while (i < topics.length) {
            list =
                list +
                `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
            i = i + 1;
        }
        list = list + "</ul>";
        return list;
    },
    authorSelect: function (authors, author_id) {
        var tag = "";
        var i = 0;
        while (i < authors.length) {
            var selected = "";
            if (authors[i].id === author_id) {
                selected = " selected";
            }
            tag =
                tag +
                `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
            i++;
        }
        return `
                <select name="author">
                ${tag}
            </select>
                `;
    },
};
