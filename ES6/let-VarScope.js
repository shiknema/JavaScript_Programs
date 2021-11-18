/**When you declare a variable with the var keyword, it is declared globally,
 *  or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a
 variable with the let keyword inside a block, statement, or expression, its scope is
  limited to that block, statement, or expression. */


function checkScope() {
    var i = 'function scope';
    if (1<2) {
     let i = 'block scope'; //    var i = 'block scope'; give error= "i already declear", if function scope is also declare with let keyword
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return  i;
  }
  checkScope()