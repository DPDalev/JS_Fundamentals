function capitalizeTheWords(text) {

    let newText = text.toLowerCase().split(' ');
    let capitalizedNewText = [];

    for (let word of newText) {
        capitalizedNewText.push(capitalizeFirstLetter(word));
    }

    function capitalizeFirstLetter(word) {

        let chars = Array.from(word);
        chars[0] = chars[0].toUpperCase();
        //console.log(chars.join(''));
        return chars.join('');
    }

    console.log(capitalizedNewText.join(' '));
}


capitalizeTheWords('Capitalize these word');
capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');
