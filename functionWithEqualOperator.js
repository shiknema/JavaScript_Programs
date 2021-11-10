/*Add the greater than 
or equal to operator to the indicated lines so that the return statements make sense. 
*/

function testGreaterOrEqual(val) {
    if (val >=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

  /** Add the less than or equal to operator to the indicated
   *  lines so that the return statements make sense.
 */

   function testLessOrEqual(val) {
    if (val) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);