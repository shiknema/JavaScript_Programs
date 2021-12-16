/**
 * Using the Test Method
 * ----------------------------------------------------------------------------
Regular expressions are used in programming languages to match parts of strings. 
You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the
 following regular expression: /the/. Notice that quote marks are not required within the
  regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() 
method. The .test() method takes the regex, applies it to a string (which is placed inside
    rentheses), and returns true or false if your pattern finds something or not.

    let testStr = "freeCodeCamp";
    let testRegex = /Code/;
    testRegex.test(testStr);

 o/p -The test method here returns true.

Apply the regex myRegex on the string myString using the .test() method.
 */

let myString = "Hello, World!";
let myRegex = /Hello/;
 // let result= myRegex // Change this line
 let result= myRegex.test(myString);
 console.log(result);


 /**
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. 
You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to
 match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more 
patterns with more OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish.
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let petType = petRegex.test(petString);
console.log( petType);