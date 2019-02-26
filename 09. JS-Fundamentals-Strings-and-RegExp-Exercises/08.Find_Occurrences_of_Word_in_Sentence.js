function findOccurrencesOfWord(text, word) {

    let count = 0;

    let regMatch = new RegExp("\\b"+word+"\\b", "gi");
    let match = regMatch.exec(text);

    while (match) {
count++;
        match = regMatch.exec(text);
    }

    console.log(count);
}


findOccurrencesOfWord('The waterfall was so high, that the child couldn’t see its peak.', 'the');
findOccurrencesOfWord('How do you plan on achieving that? How? How can you even think of that?', 'how');
findOccurrencesOfWord('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');
