//function censorship(text, arr) {

    //let textsToReplace = arr[1];

    //for (let i = 0; i < textsToReplace.length; i++) {
//
    //    let dashes = '-'.repeat(textsToReplace[i].length);
//
    //    textToCensor = textToCensor.replace(textsToReplace[i], dashes);
    //}
    //console.log(textToCensor);

    function censorship(text, input) {
        let forbiddenWords = input;
        for(let word of forbiddenWords) {
            text = text.split(word).join("-".repeat(word.length));
        }

        console.log(text);

    }


censorship('roses are red, violets are blue', [', violets are', 'red']);

//roses are red, violets are blue, violets are
//red