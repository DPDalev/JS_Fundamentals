function matchAllWords(text) {

}


matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords('_(Underscores) are also word characters');



function matchAllWords(text) {
    console.log(text.split(/\W+/).filter(w => w!="").join("|"));
}