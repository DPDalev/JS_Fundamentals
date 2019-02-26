function cookingByNumbers(arguments) {

    let number = arguments[0];

    let chop = (number) => number / 2;
    let dice = (number) => Math.sqrt(number);
    let spice = (number) => ++number;
    let bake = (number) => number * 3;
    let fillet = (number) => number * 0.8;

    for (let i = 1; i < arguments.length; i++) {

        let command = arguments[i];

        switch (command) {
            case "chop": {
               number = chop(number);
                console.log(number);
                break;
            }
            case "dice":
                number = dice(number);
                console.log(number);
                break;
            case "spice":
                number = spice(number);
                console.log(number);
                break;
            case "bake":
                number = bake(number);
                console.log(number);
                break;
            case "fillet":
                number = fillet(number);
                console.log(number);
                break;
        }
    }
}


cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
