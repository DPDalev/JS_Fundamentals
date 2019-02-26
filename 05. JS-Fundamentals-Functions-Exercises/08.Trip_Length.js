function tripLength(x1, y1, x2, y2, x3, y3) {

    let a = calculateDistance(x1, y1, x2, y2);
    let b = calculateDistance(x2, y2, x3, y3);
    let c = calculateDistance(x1, y1, x3, y3);

    let paths = [a, b, c];
    let path = a + b + c;

    let path1 = a + b;
    let path2 = b + c;
    let path3 = a + c;
    //let path;

    if (path1 <= path2) {
        start = '1';
        mid = '2';
        end = '3';
        path = path1;
    } else if (path2 <= path1) {
        start = '2';
        mid = '3';
        end = '1';
        path = path2;
    } else if (path3 <= path1) {
        start = '3';
        mid = '1';
        end = '2';
        path = path3;
    }

    console.log(`${a}->${b}->${c}: ${path}`);

    function calculateDistance(e, f, g, h) {
        return Math.sqrt((e - g) ** 2 + (f - h) ** 2);
    }
}


tripLength(0, 0, 2, 0, 4, 0);
tripLength(5, 1, 1, 1, 5, 4);
tripLength(-1, -2, 3.5, 0, 0, 2);