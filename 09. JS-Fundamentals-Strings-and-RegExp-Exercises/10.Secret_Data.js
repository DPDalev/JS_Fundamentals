function encryptText(text) {

    let nameRegex = /(\*[A-Z]{1}[a-z]+)/;
    let numRegex = /(\+[0-9\-]{10})/;
    let idRegex = /\/;
    let baseRegex = /\/;


}


//name regex  (\*[A-Z]{1}[a-z]+)
//tel regex (\+[0-9\-]{10})
//id regex


function secretData(input) {
    let nameRegex = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9\-]{10}(?=\t| |$)/g;
    let idRegex = /![a-zA-Z0-9]+(?=\t| |$)/g;
    let baseRegex = /_[a-zA-Z0-9]+(?=\t| |$)/g;

    for(let sentence of input) {
        sentence = sentence.replace(nameRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(phoneRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(idRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(baseRegex, m => "|".repeat(m.length));

        console.log(sentence);
    }
}