function sortArrayBy2Criteria(arr) {

    let sortedArr = arr.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);

    console.log(sortedArr.join('\n'));

}


sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);