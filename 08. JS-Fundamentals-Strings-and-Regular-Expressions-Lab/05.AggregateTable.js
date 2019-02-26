function aggregateTable(args) {

let towns = [];
let sum = 0;

    for (let i = 0; i < args.length; i++) {

       let tokens = args[i].split('| ').filter(a => a !=='');

        towns.push(tokens[0].trim());
        sum += Number(tokens[1].trim());
    }
    console.log(towns.join(', '));
    console.log(sum);

}

aggregateTable(['| Sofia | 300', '| Veliko Tarnovo | 500', '| Yambol | 275']);
