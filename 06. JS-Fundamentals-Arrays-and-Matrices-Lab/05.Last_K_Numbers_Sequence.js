function lastKNumbersSequence(count, factor) {

    let result = [1];

    for (let i = 1; i < count; i++) {
        let start = Math.max(0, i - factor);
        let end = i - 1;
        let sum = 0;

        for (let j = start; j <= end; j++) {
            sum += result[j];
        }
        result[i] = sum;
    }
    console.log(result.join(' '));
}


lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);