function multiplicationTable(n) {

    console.log('<table border="1">');

    //First line
    let firstLine = "";

    for (let i = 1; i <= n; i++) {
        firstLine += "<th>" + i + "</th>";
    }

    console.log(" <tr><th>x</th>" + firstLine + "</tr>");

    //Table
    for (let i = 1; i <= n; i++) {

        let line = "<th>" + i + "</th>";

        for (let j = 1; j <= n; j++) {
            line += "<td>" + i * j + "</td>";
        }
        console.log(" <tr>" + line + "</tr>");
    }
    console.log('</table>');
}

multiplicationTable(3);