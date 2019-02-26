function compoundInterest([sum, interest, period, years]) {

    let frequency = 12 / period;
    let compoundInterest = sum * (1 + interest/100/frequency) ** (frequency * years);

    console.log(compoundInterest.toFixed(2));
}


compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);

