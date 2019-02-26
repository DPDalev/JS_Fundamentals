function wordsUpperCase(text) {

    let wordsUpCas = text.toUpperCase();
    let words = extractWords();

    words = words.filter(w => w != '');

    console.log(words.join(', '));

    function extractWords() {
        return wordsUpCas.split(/\W+/);
    }
}


wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');