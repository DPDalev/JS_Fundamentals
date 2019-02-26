function smallestTwoNumbers(args) {

    //Кратко решение:
    //args.sort((a, b) => a - b);
    //let result = args.splice(0, 2);
    //console.log(result.join(' '));

    let currentSmallest = Number.MAX_VALUE;
    let smallestNumberIndex = -1;
    let smallestNumbers = [];

    for (let j = 0; j < Math.min(2, args.length); j++) {
        for (let i = 0; i < args.length; i++) {

            if (args[i] < currentSmallest) {
                currentSmallest = args[i];
                smallestNumberIndex = i;
            }
        }
        smallestNumbers.push(currentSmallest);
        args.splice(smallestNumberIndex, 1);



        currentSmallest = Number.MAX_VALUE;
        smallestNumberIndex = -1;
    }
    console.log(smallestNumbers.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
smallestTwoNumbers([1]);
