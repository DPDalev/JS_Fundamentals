function negativePositiveNumbers(arr) {

    let result = [];

    for(let i in arr) {
        if(arr[i] >= 0) {
            result.push(arr[i]);
        }
        else {
            result.unshift(arr[i]);
        }
    }

    console.log(result.join(' '));

}


negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);