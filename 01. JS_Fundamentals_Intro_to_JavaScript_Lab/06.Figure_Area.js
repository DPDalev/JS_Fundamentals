function figureArea(w1, h1, w2, h2) {

    let [s1, s2, s3] = [w1 * h1, w2 * h2, Math.min(h1, h2) * Math.min(w1, w2)];

    console.log(s1 + s2 - s3);

}


figureArea(2, 4, 5, 3);
figureArea(13, 2, 5, 8);