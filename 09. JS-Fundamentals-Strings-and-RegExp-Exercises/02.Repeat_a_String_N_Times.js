function repeatStringNTimes(text, times) {

    let newText = '';

    for (let i = 0; i < times; i++) {
        newText = newText + text;

    }
    console.log(newText);
}


repeatStringNTimes("repeat", 5);
repeatStringNTimes("magic is real", 3);