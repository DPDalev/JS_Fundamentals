function distanceIn3D([arg1, arg2, arg3, arg4, arg5, arg6]) {

    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let z1 = Number(arg3);

    let x2 = Number(arg4);
    let y2 = Number(arg5);
    let z2 = Number(arg6);

    let b = Math.sqrt((x1 - x2) ** 2 + (z1 - z2) ** 2);
    let distance = Math.sqrt((y1 - y2) ** 2 + b ** 2);

    console.log(distance);
}


distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);