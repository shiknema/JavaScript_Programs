
/*
Testing Objects for Properties
---------------------------------------
Sometimes it is useful to check if the property of a given object exists or not.
 We can use the .hasOwnProperty(propname) method of objects to determine
  if that object has the given property name.
 .hasOwnProperty() returns true or false if the property is found or not.

------------------------------------------------------------------------------------------
Problem --Modify the function checkObj to test if an object passed to the function (obj)
          contains a specific property (checkProp).If the property is found, 
          return that property's value. If not, return "Not Found".
 
 **/

          object={
            "gift": "pony", 
            "pet": "kitten", 
            "bed": "sleigh",
            "city": "Seattle"}

function checkObj(checkProp) {

    // Only change code below this line
       
  if (object.hasOwnProperty(checkProp)){
    return console.log(object[checkProp]); 
  }else
    return console.log("Not Found");
    // Only change code above this line
  }
  //checkObj("bed"); //sleigh
  checkObj("b"); // Not Found