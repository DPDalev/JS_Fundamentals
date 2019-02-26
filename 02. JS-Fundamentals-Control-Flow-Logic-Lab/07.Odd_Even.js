function oddEven(number) {

    if (number % 2 !== 0 && Math.round(number) === number) {
        console.log("odd");
    }
    else if (number % 2 === 0) {
        console.log("even");
    }
    else {
        console.log("invalid");
    }
}


oddEven(5);
oddEven(8);
oddEven(1.5);
