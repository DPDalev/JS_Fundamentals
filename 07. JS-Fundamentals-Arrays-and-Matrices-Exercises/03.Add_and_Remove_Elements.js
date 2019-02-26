function addRemoveElements(args) {

    let numToAdd = 1;
    let resultArr = [];

    for (let command of args) {
        if(command === 'add') {
            resultArr.push(numToAdd);
        }
        else {
            resultArr.pop();
        }
        numToAdd++;

    }

    //Print the result array
    if(resultArr.length === 0) {
        console.log('Empty');
    }
    else {
        for (let element of resultArr) {
            console.log(element);
        }
    }
}


addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);