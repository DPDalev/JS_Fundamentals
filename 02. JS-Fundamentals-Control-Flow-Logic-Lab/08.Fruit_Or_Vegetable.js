function fruitOrVegetable(input) {

    if (input === "banana" || input === "cherry" || input === "apple" || input === "kiwi" ||
        input === "peach" || input === "lemon" || input === "grapes") {
        console.log("fruit");
    }

    else if (input === "tomato" || input === "cucumber" || input === "pepper" ||
        input === "onion" || input === "garlic" || input === "parsley") {
        console.log("vegetable");
    }

    else {
        console.log("unknown");
    }
}


fruitOrVegetable("banana");
fruitOrVegetable("cucumber");
fruitOrVegetable("pizza");