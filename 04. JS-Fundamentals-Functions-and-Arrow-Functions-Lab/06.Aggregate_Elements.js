function aggregateElements(args) {

    aggregate(args, 0, (a, b) => a + b);
    aggregate(args, 0, (a, b) => a + 1 / b);
    aggregate(args, "", (a, b) => a + b);

    function aggregate(arr, initValue, func) {

        let val = initValue;

        for (var i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}


aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);