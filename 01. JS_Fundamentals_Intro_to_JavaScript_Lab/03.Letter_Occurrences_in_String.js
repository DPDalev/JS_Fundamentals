function countLetterInWord(word, letter) {

    let occurences = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
        occurences++;
        }
    }
    console.log(occurences);
}


countLetterInWord('hello', 'l');
countLetterInWord('panther', 'n');
countLetterInWord('sssssssoooommmmmeeeeeewwwwwwoooorrrrddd', 'o');
