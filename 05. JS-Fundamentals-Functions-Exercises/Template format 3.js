function templateFormat(input) {

    printHead();

    for (let i = 0; i < input.length; i += 2) {

        let question = input[i];
        let answer = input[i + 1];

        makeQuiz(question, answer);
    }

    printFoot();

    function makeQuiz(q, a) {
        makeQuestion(q);
        makeAnswer(a);
    }

    function printHead() {
        console.log('<?xml version="1.0" encoding="UTF-8"?>\n' + "<quiz>");
    }

    function printFoot() {
        console.log("</quiz>")
    }

    function makeQuestion(q) {
        console.log("  <question>");
        console.log(`    ${q}`)
        console.log("  <question>");
    }

    function makeAnswer(a) {
        console.log("  <answer>");
        console.log(`    ${a}`)
        console.log("  <answer>");
    }

}

templateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"
])