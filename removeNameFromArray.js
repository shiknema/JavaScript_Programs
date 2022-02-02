function removeNameFromArray(array, n) {
    //const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result = removeNameFromArray(["bob", "Amit", "Charu", "Dinesh"], "Amit");

console.log(result);
