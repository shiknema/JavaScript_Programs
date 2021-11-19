/**
 * Use Destructuring Assignment to Extract Values from Objects
 * 
 * ************************************************************************
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;
Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assigned the values of their 
respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.
---------------------------------------------------------------------------------------

Problem--Replace the two assignments with an equivalent destructuring assignment. It should still 
assign the variables today and tomorrow the values of today and tomorrow from the
 HIGH_TEMPERATURES object.
 * 
 */

 const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  //const today = HIGH_TEMPERATURES.today;
  //const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  const {today,tomorrow} = HIGH_TEMPERATURES;
  console.log( "Today = ",today," Tomorrow = ", tomorrow);
  
  // Only change code above this line

//------------------------------------------------------------------
/**
 * Problem2-Replace the two assignments with an equivalent destructuring assignment. 
 * It should still assign the variables highToday and highTomorrow the values of today 
 * and tomorrow from the HIGH_TEMPERATURES object.


 */
const {today:highToday, tomorrow :highTomorrow} = HIGH_TEMPERATURES;
console.log("***************Destructuring Assignment************");
console.log("highToday= ",highToday, "highTomorrow = ", highTomorrow);

/********************************************************************************** 
problem-3-
Replace the two assignments with an equivalent destructuring assignment. It should
 still assign the variables lowToday2 and highToday2 the values of today.low and 
 today.high from the LOCAL_FORECAST object.
*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  //const lowToday2 = LOCAL_FORECAST.today.low;
  //const highToday2 = LOCAL_FORECAST.today.high;
  
  const {today :{low : lowToday2 , high : highToday2}} = LOCAL_FORECAST
  // Only change code above this line

  console.log("lowToday2= ",lowToday2, "highToday2 = ", highToday2);

  