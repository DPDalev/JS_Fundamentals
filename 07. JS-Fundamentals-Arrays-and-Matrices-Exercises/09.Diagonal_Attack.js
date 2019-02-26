function diagonalAttack(arr) {

    let sum1 = 0;
    let sum2 = 0;
    let areEqual = false;
    let matrix = [];

    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(' ').map(Number);
    }
    for (let i = 0; i < arr.length; i++) {

        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length - 1 - i];
    }
    if (sum1 === sum2) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if(i !== j && matrix.length - 1 - j !== i) {
                    matrix[i][j] = sum1;
                }
            }
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}


diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);