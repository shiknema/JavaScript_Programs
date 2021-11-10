// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {   // nextInLine([[1,2,3,4,5] , 6)
    // Only change code below this line
     arr.push(item)  //this line added 6 value at the END 
    //exp-[1,2,3,4,5,6]
    item= arr.shift(); // It remove 1 element, (1) from the START
    //exp-[2,3,4,5,6]
    // NOTE- pop() removed one elemnt from the END of the ARRAY
    return item;
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(" kya h",nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));