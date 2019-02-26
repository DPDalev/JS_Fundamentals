function processOddNumbers(args) {

    let result = [];

    for (let i = 1; i < args.length; i += 2) {
        result.unshift( 2 * args[i]);
    }
    console.log(result.join(' '));
}


processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);