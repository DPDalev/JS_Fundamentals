function distanceOverTime([a, b, c]) {

    let speed1 = Number(a);
    let speed2 = Number(b);
    let timeSeconds = Number(c);

    let distance = Math.abs(speed1 - speed2) * 1000 / 3600 * timeSeconds;

    console.log(distance);
}


distanceOverTime(["0", "60", "3600"]);
distanceOverTime(["11", "10", "120"]);
distanceOverTime(["5", "-5", "40"]);

