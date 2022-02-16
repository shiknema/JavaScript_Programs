/*For example, to match only the string hah with the letter
 a appearing at least 3 times, your regex would be /ha{3,}h/.*/

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
//In order, the three test calls would return true, false, and true.

/*Change the regex haRegex to match the word Hazzah only when it has four or more 
letter z's.*/

/*const str = "Hazzzah";
const regxStr = /Haz{4,}ah/;
const result =regxStr.test(str);
console.log(result);
*/
const email = "shiknema1273@gmail.com";
const regxStr = /^([a-z]+\d*)@[a-z]{3,}.([a-z]{3}|(co.in))/ig;    //$@[a-z]{3,}.[a-z]{3}/ig;
const result =regxStr.test(email);
const match= email.match(regxStr);
console.log(match);
console.log(result);

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
let result1 = pwRegex.test(sampleWord);