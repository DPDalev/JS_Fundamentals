function biggestElement(matrix) {

    let biggestElement = Number.NEGATIVE_INFINITY;

    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[j].length; i++) {

            if (matrix[j][i] > biggestElement) {
                biggestElement = matrix[j][i];
            }
        }
    }
    console.log(biggestElement);
}


//biggestElement([[20, 50, 10], [8, 33, 145]]);
//biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
biggestElement([[20, 10, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);