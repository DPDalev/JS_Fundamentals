function printLetters(text) {

    for (i = 0; i < text.length; i++) {
        console.log((`str[${i}] -> ${text[i]}`));
    }
}

printLetters('Hello, World!');
printLetters('SoftUni');