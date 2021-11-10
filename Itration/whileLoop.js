/*Add the numbers 5 through 0 (inclusive) in descending order 
to myArray using a while loop.
*/

const myArray = [];
let i=5;
while(i>=0){
  myArray.push(i);
  i--;
}
console.log( "myArray = ",myArray);
//------------------------------------------------------------------

/**  Use a for loop to push the values 1 through 5 onto myArray.  ******* */

const secondArray=[];

for(let i=1;i<=5;i++){
    secondArray.push(i);
}
console.log("secondArray =  ",secondArray);
//-------------------------------------------------------------------

/*****   Push the odd numbers from 1 through 9 to myArray using a for loop.   ******* */

const oddNumbersArray= [];
for(let i=1;i<=9; i+=2){
    oddNumbersArray.push(i);
}
console.log("odd Numbers od Array = ", oddNumbersArray);

//--------------------------------------------------------------------------------

/******  Push the odd numbers from 9 through 1 to myArray using a for loop.   *****/

const reverseEvenArray = [];

for (let i= 10 ; i>=0 ;i-=2){
reverseEvenArray.push(i);
}

console.log( "Reverse Even Array = ", reverseEvenArray);

/-------------------------------------------------------------------/


/** Declare and initialize a variable total to 0.
 *  Use a for loop to add the value of each element of the myArr array to total.*/
 
const myArr = [2, 3, 4, 5, 6];

 let total=0;
 for(let i=0; i<myArr.length; i++ ){
// for(val of myArr){  
 total=total+myArr[i]
 }
 console.log("Total = ", total);
 //----------------------------------------------------------------------------------
 
 //******************** Nesting For Loops ************************************** */

 /* Problem--Modify function multiplyAll so that it returns the product
  of all the numbers in the sub-arrays of arr. */

  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for(let i=0; i<arr.length; i++){
    for( let j=0; j<arr[i].length; j++){
      product *= arr[i][j]
    }
  }
    // Only change code above this line
    return console.log( "product = ", product);
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  /*** O/P- 
   * multiplyAll([[1], [2], [3]]) should return 6

    multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040

    multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54
   */