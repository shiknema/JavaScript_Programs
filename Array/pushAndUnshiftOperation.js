/* /**
//  * the push() method adds elements to the end of an array,
    and unshift() adds elements to the beginning. 



    Prob- We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
 */

function mixedNumbers(arr) {
    // Only change code below this line
    //var add = ['I',2,'three'];
    let beginAdd = arr.unshift('I', 2, 'three');
    console.log(beginAdd);
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six'])); 