function triangleOfStars(n) {

    printStarsAsc(n);
    printStarsDesc(n);

    //The two funcions are inserted in the main one, because the JUDGE accepts only one function
    function printStarsAsc(n) {
        for (let i = 1; i <= n; i++) {
            console.log('*'.repeat(i));
        }
    }

    function printStarsDesc(n) {
        for (let i = n - 1; i >= 1; i--) {
            console.log('*'.repeat(i));
        }
    }
}


triangleOfStars(1);
triangleOfStars(2);
triangleOfStars(5);