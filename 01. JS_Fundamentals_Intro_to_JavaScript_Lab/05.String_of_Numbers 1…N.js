function stringOfNumbers1ToN(arg1) {
    let n = Number(arg1);
    let stringOfLetters = '';

    for (var i = 1; i <= n; i++) {
        stringOfLetters += i;
    }

    console.log(stringOfLetters);
}


stringOfNumbers1ToN(['11']);
