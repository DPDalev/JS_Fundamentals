function findVariableNamesInSentences(text) {

    let regMatch = /\b_{1}([A-Za-z0-9]+\b)/g;
    let names = [];

    let match = regMatch.exec(text);

    while (match) {
        names.push(match[1]);

        match = regMatch.exec(text);
    }

    console.log(names.join(','));
}


findVariableNamesInSentences('The _id and _age variables are both integers.');
findVariableNamesInSentences('Calculate the _area of the _perfectRectangle object.');
findVariableNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
