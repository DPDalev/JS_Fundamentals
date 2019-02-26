function cappyJuice(juices) {

    let juicesObj = {};
    let bottles = {};

    for (let line of juices) {

        let tokens = line.split(" => ");
        let juiceName = tokens[0];
        let juiceVolume = Number(tokens[1]);

        if (!juicesObj.hasOwnProperty(juiceName)) {
            juicesObj[juiceName] = 0;
        }

        juicesObj[juiceName] += juiceVolume;

        if(juicesObj[juiceName] >= 1000) {
            bottles[juiceName] = parseInt(juicesObj[juiceName] / 1000);
        }
    }

    for (let key of Object.keys(bottles))
        console.log(`${key} => ${bottles[key]}`);
}

cappyJuice(["Orange => 2000", "Peach => 1432", "Banana => 450", "Peach => 600", "Strawberry => 549"]);
cappyJuice(["Kiwi => 234", "Pear => 2345", "Watermelon => 3456", "Kiwi => 4567", "Pear => 5678", "Watermelon => 6789"]);
