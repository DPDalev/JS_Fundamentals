function insideVolume(input) {

    for (let i = 0; i < input.length; i += 3) {

        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if (inVolume(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }

    function inVolume(x, y, z) {
        if (x >= 10 && x <= 50 && y >= 20 && y <= 80 && z >= 15 && z <= 50) {
            return true;
        } else {
            return false;
        }
    }
}


insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);