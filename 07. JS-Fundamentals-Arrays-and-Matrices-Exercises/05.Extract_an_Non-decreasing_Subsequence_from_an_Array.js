function extractNonDecreasingSubSeq(args) {

    let biggestNumber = args[0];
    let resultArr = [args[0]];

    for (let i = 1; i < args.length; i++) {
        if (args[i] >= biggestNumber) {
            biggestNumber = args[i];
            resultArr.push(args[i]);
        }
    }
    console.log(resultArr.join('\n'));
}


extractNonDecreasingSubSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNonDecreasingSubSeq([1, 2, 3, 4]);
extractNonDecreasingSubSeq([20, 3, 2, 15, 6, 1]);