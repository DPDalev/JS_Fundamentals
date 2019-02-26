function areaAndPerimeter(grads) {

    grads = grads % 400;
    let degrees = grads * 0.9;

    let degreesOutput = degrees >= 0 ? degrees : 360 + degrees;

    console.log(degreesOutput);
}


areaAndPerimeter(100);
areaAndPerimeter(400);
areaAndPerimeter(850);
areaAndPerimeter(-50);


