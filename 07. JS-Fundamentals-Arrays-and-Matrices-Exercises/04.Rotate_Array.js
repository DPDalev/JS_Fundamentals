function rotateArray(args) {

    let times = args.pop() % args.length;

    for (let i = 0; i < times; i++) {
        args.unshift(args.pop());
    }

    console.log(args.join(' '));
}


rotateArray([1, 2, 3, 4, 2]);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', 15]);