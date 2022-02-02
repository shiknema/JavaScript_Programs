/**
 * Match Numbers and Letters of the Alphabet
 * *************************************************************************
 Using the hyphen (-) to match a range of characters is not limited to letters. It also
 works to match a range of numbers.

 For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

 Also, it is possible to combine a range of letters and numbers in a single character set.

 let jennyStr = "Jenny8675309";
 let myRegex = /[a-z0-9]/ig;   g= global flag
 jennyStr.match(myRegex);
 *********************************************************************************************
 problem-Create a single regex that matches a range of letters between h and s, and a range
 of numbers between 2 and 6. Remember to include the appropriate flags in the regex.


 */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // i= Ignore Case, g= global flag
let result = quoteSample.match(myRegex); // Change this line

  
/***
 ******* In Short Method --Match All Letters and Numbers

 The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
All four of these test calls would return true.

 */

let quoteSample1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result1 = quoteSample.match(alphabetRegexV2).length;