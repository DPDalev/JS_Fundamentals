function filterByAge(arg1, arg2, arg3, arg4, arg5) {

    let minAge = arg1;
    let firstPerson = { name: arg2, age: arg3 };
    let secondPerson = { name: arg4, age: arg5 };

    if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    }
    if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }
}


filterByAge(12, 'Ivan', 15, 'Asen', 9);