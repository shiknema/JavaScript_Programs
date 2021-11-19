/**Use Destructuring Assignment to Assign Variables from Arrays
 * **********************************************************************'
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the 
spread operator unpacks all contents of an array into a comma-separated list. 
Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
The console will display the values of a and b as 1, 2.

The variable a is assigned the first value of the array, and b is assigned the second
 value of the array. We can also access the value at any index in an array with 
 destructuring by using commas to reach the desired index:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
The console will display the values of a, b, and c as 1, 2, 5.
-------------------------------------------------------------------------------

problem-Use destructuring assignment to swap the values of a and b so that a receives
 the value stored in b, and b receives the value stored in a. 
 */

 let a = 8, b = 6;
 // Only change code below this line

 [a,b]=[6,8]

 console.log( a,b);

 //************************************************************************** */

 /** Problem 2-Use destructuring assignment to swap the values of a and b so that a
  *  receives thevalue stored in b, and b receives the value stored in a.
  * 
  * *************************************************************************' */
 
 let x =2, y= 6;
 console.log("Before Swapping");
 console.log( "x = ", x ,"y= ",y);
 [x,y] = [y,x]     //destructuring assignment
 console.log("After Swapping ");
 console.log( "x = ", x ,"y= ",y);

