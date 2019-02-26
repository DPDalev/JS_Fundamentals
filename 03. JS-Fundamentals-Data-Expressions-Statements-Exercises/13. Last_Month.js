function lastMonth(date) {

    let month = date[1];
    let year = date[2];

    let newDate = new Date(year, month-1, 0);
    let days = newDate.getDate();

    console.log(days);
}

lastMonth([17, 3, 2020]);
lastMonth([13, 12, 2004]);