function printArrayWithDelimiter(args) {

    let delimiter = args[args.length - 1];
    args.pop();

    console.log(args.join(delimiter));
}


printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
printArrayWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);