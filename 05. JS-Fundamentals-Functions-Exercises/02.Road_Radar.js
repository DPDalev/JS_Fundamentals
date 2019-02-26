function roadRadar(input) {

    let speed = input[0];
    let road = input[1];
    let limit = getLimit(road);
    let infraction = checkSpeed(speed, getLimit(road));

    if (checkSpeed(speed, getLimit(road))) {
        console.log(infraction);
    } else console.log();

    function getLimit(road) {
        switch (road) {
            case "residential":
                return 20;
                break;
            case "city":
                return 50;
                break;
            case "interstate":
                return 90;
                break;
            case "motorway":
                return 130;
                break;
        }
    }

    function checkSpeed(a, b) {

        let infraction = a - b;

        if (infraction > 0 && infraction <= 20) {
            return "speeding";
        } else if (infraction > 20 && infraction <= 40) {
            return "excessive speeding";
        } else if (infraction > 40) {
            return "reckless driving";
        }
    }
}


roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);