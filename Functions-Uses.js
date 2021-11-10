
//Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
  // Only change code below this line

  return a < b;

 /* if (a < b) {
    return true;
  } else {
    return false;
  }
*/
  // Only change code above this line
}

isLess(10, 15);

//*************************************************

//Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

//Hint--Remember that undefined is a keyword, not a string.

// Setup
function abTest(a, b) {
  // Only change code below this line
     
  	if(a<0 || b < 0){
 
 		return undefined;
 	}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);