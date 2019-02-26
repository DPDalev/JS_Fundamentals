function concatenateAndReverse(text) {

    let concatenatedtext = text.join('');

    let chars = Array.from(concatenatedtext);

    let reversedChars = chars.reverse();

    concatenatedtext = reversedChars.join('');

    console.log(concatenatedtext);
}

concatenateAndReverse(['I', 'am', 'student']);
concatenateAndReverse(['race', 'car']);