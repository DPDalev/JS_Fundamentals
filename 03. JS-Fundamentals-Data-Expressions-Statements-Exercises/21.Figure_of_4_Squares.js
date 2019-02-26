function figureOfFourSquares(n) {

    if (n > 2 && n <= 200) {

        let line = '+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+';
        let midLine = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|';

        let m = (n - 4 - (1 - n % 2)) / 2;

        console.log(line);
        for (var i = 0; i < m; i++) {
            console.log(midLine);
        }
        console.log(line);
        for (var i = 0; i < m; i++) {
            console.log(midLine);
        }
        console.log(line);
    }
    else if(n === 2) {
        console.log("+++");
    }
    else return;
}


figureOfFourSquares(2);
figureOfFourSquares(3);
figureOfFourSquares(4);
figureOfFourSquares(5);
figureOfFourSquares(6);
figureOfFourSquares(7);