function modifyAverage(number) {

    let numStr = String(number);

    let getAverage = (numString) => numStr.split('').map(Number).reduce((a, b) => a + b) / numStr.length;

    while (getAverage(numStr) <= 5) {
        numStr += '9';
    }
    console.log(numStr);
}

modifyAverage(101);
modifyAverage(5835);