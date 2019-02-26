function magicMatrices(matrix) {

    let isMagic = true;
    let sum = [];

    //Horizontal check
    for (let i = 0; i < matrix.length - 1; i++) {
        sum[i] = matrix[i].reduce((a, b) => a + b);
        sum[i + 1] = matrix[i + 1].reduce((a, b) => a + b);

        if (sum[i] !== sum[i + 1]) {
            isMagic = false;
            break;
        }
    }

    //Vertical check
    if (isMagic) {
        sum = [];
        for (let i = 0; i < matrix.length - 1; i++) {
            sum[i] = 0;
            sum[i + 1] = 0;
            for (let j = 0; j < matrix.length; j++) {
                sum[i] += matrix[j][i];
                sum[i + 1] += matrix[j][i + 1];
            }
            if (sum[i] !== sum[i + 1]) {
                isMagic = false;
                break;
            }
        }
    }
    console.log(isMagic);
}


magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);