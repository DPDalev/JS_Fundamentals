function  assignProperties(args) {

    let obj = {};

    for (var i = 0; i < args.length; i += 2) {

        obj [args[i]] = args[i + 1];

    }
    console.log(obj);
}


assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);





