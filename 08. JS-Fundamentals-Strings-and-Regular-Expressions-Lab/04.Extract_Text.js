function extractText(text) {

    let extractedText = [];

    while (true) {
        let startIndex = text.indexOf('(');
        let endIndex = text.indexOf(')');

        if (startIndex < 0 || endIndex < 0) {
            break;
        }

        let extrSubstr = text.substring(startIndex + 1, endIndex);
        if(extrSubstr.length > 0) {
            extractedText.push(extrSubstr);
        }
        text = text.substr(endIndex + 1);
    }
    console.log(extractedText.join(", "));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
//extractText('(Rakiya () is self-made liquor (alcoholic drink)');