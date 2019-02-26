function storeCatalogue(input) {

    let goods = new Map();

    for (let obj of input) {
        let tokens = obj.split(" : ");
        let goodName = tokens[0];
        let goodPrice = Number(tokens[1]);

        goods.set(goodName, goodPrice);
    }

    let sortedGoods = new Map([...goods.entries()].sort());

    let firstLetters = new Set();

    for (let key of sortedGoods.keys()) {
        let arr = Array.from(key);
        firstLetters.add(arr[0]);
    }

    for (let letter of firstLetters) {
        console.log(letter);

        for (let key of sortedGoods.keys()) {

            if(key.startsWith(letter)) {

                console.log(` ${key}: ${sortedGoods.get(key)}`);
            }
        }
    }
}

storeCatalogue(["Appricot : 20.4", "Fridge : 1500", "TV : 1499", "Deodorant : 10", "Boiler : 300", "Apple : 1.25", "Anti-Bug Spray : 15", "T-Shirt : 10"]);
//storeCatalogue();
