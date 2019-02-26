function splitStringWithDelimiter(text, delimiter) {

    let splittedText = text.split(delimiter);

    for (let word of splittedText) {

        console.log(word);
    }

}


splitStringWithDelimiter('One-Two-Three-Four-Five', '-');
splitStringWithDelimiter('http://platform.softuni.bg', '.');