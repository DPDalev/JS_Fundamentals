function binaryLogarithm(numbers) {

    for (var i = 0; i < numbers.length; i++) {

        let binaryLogarithm = Math.log2(numbers[i]);
        console.log(binaryLogarithm);
    }
}


binaryLogarithm([8, 4, 1024]);
