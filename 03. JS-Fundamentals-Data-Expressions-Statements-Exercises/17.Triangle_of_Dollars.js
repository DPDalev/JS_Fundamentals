function triangleOfDollars(n) {

    for (var i = 1; i <= n; i++) {
        let line = '$'.repeat(i);
        console.log(line);
    }
}

triangleOfDollars(4);
triangleOfDollars(5);
triangleOfDollars(6);
triangleOfDollars(7);