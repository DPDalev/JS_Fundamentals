function sumAndVat(args) {
    let sum = 0;

    for (let number of args) {
        sum += number;
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}


sumAndVat([1.20, 2.60, 3.50]);
sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);