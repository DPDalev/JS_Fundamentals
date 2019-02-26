function validityChecker([x1, y1, x2, y2]) {

    let firstArr = [x1, y1, 0, 0];
    let secondArr = [x2, y2, 0, 0];
    let thirdArr = [x1, y1, x2, y2];

    printResult(firstArr);
    printResult(secondArr);
    printResult(thirdArr);

    function printResult(arr) {
        if (check(calculateDistance(arr))) {
            console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
        }
        else {
            console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);
        }
    }

    function check(x) {
        return Math.round(x) === x;
    }

    function calculateDistance([a, b, c, d]) {
        return Math.sqrt((a - c) ** 2 + (b - d) ** 2);
    }
}


validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
