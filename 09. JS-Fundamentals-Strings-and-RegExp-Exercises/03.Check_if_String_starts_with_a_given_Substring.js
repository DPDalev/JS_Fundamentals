function startsWith(text, substring) {

    let result = text.indexOf(substring);

    if(result < 0) {
        console.log("false");
    }
    else {
        console.log("true");
    }

}


startsWith('How have you been?', 'how');
startsWith('The quick brown fox…', 'The quick brown fox…');
startsWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');