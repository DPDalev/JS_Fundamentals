function scoreToHTML(input) {

    let html = '<table>\n'
    let json = input;
    let objArr = JSON.parse(json);

    html += '  <tr><th>name</th><th>score</th></tr>\n';

    for(let obj of objArr){
        html += `  <tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    }

    html += '</table>';

    console.log(html);


    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

scoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
//scoreToHTML([{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]);