function printEveryNthElement(args) {

    let step = Number(args[args.length - 1]);
    args.pop();

    for (let i = 0; i < args.length; i += step) {
        console.log(args[i]);
    }
}


printEveryNthElement([5, 20, 31, 4, 20, 2]);
printEveryNthElement(['dsa', 'asd', 'test', 'tset', 2]);
printEveryNthElement([1, 2, 3, 4, 5, 6]);