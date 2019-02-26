function restaurantBill(args) {

    let purchases = [];
    let bill = 0;

    for (let i = 0; i < args.length; i += 2) {

        //let tokens = args[i].split('| ').filter(a => a !=='');

        purchases.push(args[i]);
        bill += Number(args[i + 1]);
    }
    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${bill}`);
}


restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);

