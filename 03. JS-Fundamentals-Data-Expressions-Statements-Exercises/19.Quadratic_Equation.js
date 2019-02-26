function distanceOverTime(a, b, c) {

    let discr = b ** 2 - 4 * a * c;

    if (discr < 0) {
        console.log("No");
    }
    else if (discr === 0){
        let x = -b / (2 * a);
        console.log(x);
    }
    else {
        let x1 = (-b - Math.sqrt(discr)) / (2 * a);
        let x2 = (-b + Math.sqrt(discr)) / (2 * a);
        console.log(x1);
        console.log(x2);
    }
}


distanceOverTime(6, 11, -35);
distanceOverTime(1, -12, 36);
distanceOverTime(5, 2, 1);
distanceOverTime(1.25, 5, 5);



