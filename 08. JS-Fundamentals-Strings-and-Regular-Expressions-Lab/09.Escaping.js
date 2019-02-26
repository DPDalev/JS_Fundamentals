function escaping(text) {

    let result = '<ul>\n';
    for (let str of text) {
        result += '<li>' + escapeChars(text) + '</li>';
    }

    result += '</ul>';

    function escapeChars() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    console.log(result);
}

escaping(['<b>unescaped text</b>', 'normal text']);