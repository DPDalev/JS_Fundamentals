function  binaryToDecimal(binaryNum) {

    let sum = 0;

    for (var i = binaryNum.length - 1; i >= 0 ; i--) {

        sum += binaryNum[i]  * 2 ** (7 - i);
    }

    console.log(sum);
}


binaryToDecimal("00001001");
binaryToDecimal("11110000");