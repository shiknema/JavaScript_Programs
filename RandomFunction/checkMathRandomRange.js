/*Create a function called randomRange that takes a range myMin 
and myMax and returns a random whole number that's greater than
 or equal to myMin, and is less than or equal to myMax, inclusive.


 According to freeCodeCamp =

function randomRange(myMin, myMax) {
  // Only change code below this line
 let result= Math.floor(Math.random() * (myMax - myMin +1)) + myMin
 
 if( myMax >= result <= myMin){
    return result;
    }
    else{
      return 0;
    }
  // Only change code above this line
}



*/

randomRange = (myMin,myMax) =>{

    let result= Math.floor(Math.random () * (myMax -myMin +1)) + myMin

   
    if( myMin >= result <= myMax)
    {
        return console.log("Whole Number is within the range", result);
    }else {
         return console.log("out of range",result);
    }


}

randomRange(23,45)
//checkRange()