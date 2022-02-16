/**
 * 
 * Remove Whitespace from Start and End
 * ********************************************************
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.


 */

let hello = "   Hello, World! I am Here      ";
let wsRegex = /(^\s+)|(\s+$)/ig; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

console.log("trimHello = ",hello.trim());
console.log(result);