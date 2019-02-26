function endsWith(text, substring) {

    for (let i = 1; i <= substring.length ; i++) {

        if (substring[substring.length - i] !== text[text.length - i]) {
            console.log(false);
            return;
        }
    }

    console.log("true");
}


endsWith('This sentence ends with fun?', 'fun?');//true
endsWith('This is Houston, we have…', 'We have…');//false
endsWith('The new iPhone has no headphones jack.', 'o headphones jack.');//true