function treasureLocator(args) {

    let tonga = [2, 8, 0, 6];
    let tuvalu = [3, 3, 1, 1];
    let tokelau = [9, 1, 8, 0];
    let samoa = [7, 6, 5, 3];
    let cook = [9, 8, 4, 7];

    for (let i = 0; i < args.length; i += 2) {
        if (isInIsland(tonga, args[i], args[i + 1])) {
            console.log('Tonga');
        }
        else if (isInIsland(tuvalu, args[i], args[i + 1])) {
            console.log('Tuvalu');
        }
        else if (isInIsland(tokelau, args[i], args[i + 1])) {
            console.log('Tokelau');
        }
        else if (isInIsland(samoa, args[i], args[i + 1])) {
            console.log('Samoa');
        }
        else if (isInIsland(cook, args[i], args[i + 1])) {
            console.log('Cook');
        }
        else {
            console.log("On the bottom of the ocean");
        }
    }
    function isInIsland(arr, x, y) {
        return (x <= arr[0] && y <= arr[1] && y >= arr[3] && x >= arr[2]);
    }
}


treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);
