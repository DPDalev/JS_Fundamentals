function usernames(args) {

    let name = '';
    let names = [];

    for (let i = 0; i < args.length; i++) {

        let tokens = args[i].split('@');
        name = tokens[0] + '.';
        let tokensDomain = tokens[1].split('.');
        for (let str of tokensDomain) {
            name += str[0];
        }
        names.push(name);
    }
    console.log(names.join(', '));
}


usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);