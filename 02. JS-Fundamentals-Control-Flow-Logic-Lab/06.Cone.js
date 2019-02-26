function cone(radius, height) {

    let baseSurface = Math.PI * radius * radius;
    let coneSurface = baseSurface + (radius * Math.PI) * Math.sqrt(radius * radius + height * height );
    let coneVolume = baseSurface * height / 3;

    console.log(`volume = ${coneVolume}`);
    console.log(`area = ${coneSurface}`);
}


cone(3, 5);
cone(3.3, 7.8);

