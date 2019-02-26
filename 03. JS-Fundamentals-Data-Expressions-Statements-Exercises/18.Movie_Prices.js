function moviePrices([arg1, arg2]) {

    let movie = arg1.toLowerCase();
    let day = arg2.toLowerCase();

    let price = 0;

    switch (day) {
        case "monday": {
            if (movie === "the godfather") price = 12;
            if (movie === "schindler's list") price = 8.5;
            if (movie === "casablanca") price = 8;
            if (movie === "the wizard of oz") price = 10;
            break;
        }
        case "tuesday": {
            if (movie === "the godfather") price = 10;
            if (movie === "schindler's list") price = 8.5;
            if (movie === "casablanca") price = 8;
            if (movie === "the wizard of oz") price = 10;
            break;
        }
        case "wednesday": {
            if (movie === "the godfather") price = 15;
            if (movie === "schindler's list") price = 8.5;
            if (movie === "casablanca") price = 8;
            if (movie === "the wizard of oz") price = 10;
            break;
        }
        case "thursday": {
            if (movie === "the godfather") price = 12.50;
            if (movie === "schindler's list") price = 8.5;
            if (movie === "casablanca") price = 8;
            if (movie === "the wizard of oz") price = 10;
            break;
        }
        case "friday": {
            if (movie === "the godfather") price = 15;
            if (movie === "schindler's list") price = 8.5;
            if (movie === "casablanca") price = 8;
            if (movie === "the wizard of oz") price = 10;
            break;
        }
        case "saturday": {
            if (movie === "the godfather") price = 25;
            if (movie === "schindler's list") price = 15;
            if (movie === "casablanca") price = 10;
            if (movie === "the wizard of oz") price = 15;
            break;
        }
        case "sunday": {
            if (movie === "the godfather") price = 30;
            if (movie === "schindler's list") price = 15;
            if (movie === "casablanca") price = 10;
            if (movie === "the wizard of oz") price = 15;
            break;
        }
    }
    if (price !== 0) {
        console.log(price);
    }
    else {
        console.log("error");
    }
}


moviePrices(["The Godfather", "Friday"]);
moviePrices(["casablanca", "sunday"]);

