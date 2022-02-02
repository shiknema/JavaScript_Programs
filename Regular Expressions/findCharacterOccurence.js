/**
 * Match Characters that Occur One or More Times
Sometimes, you need to match a character (or group of characters) that appears one or more
imes in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or 
pattern has to be present consecutively. That is, the character has to repeat one after
 the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would 
also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"]
 because the a characters are not in a row - there is a b between them. Finally, since 
 there is no a in the string bcd, it wouldn't find a match.

*********************************************************************************************
 Program-You want to find matches when the letter s occurs one or more times in Mississippi.
 Write a regex that uses the + sign.
 ****************************************************************************************
 */
let spelling = "Mississippi";
let matchRegex= /s+/g;
let totalNumberOfOccurence = spelling.match(matchRegex);
console.log( totalNumberOfOccurence);

/*****************************************************************************************
 * Match Characters that Occur Zero or More Times
 * *****************************************************************************************
The last challenge used the plus + sign to look for characters that occur one or more times. 
There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/
/*soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

****************************************************************************************
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! 
behind the scenes. Create a regex chewieRegex that uses the * character to match an 
uppercase A character immediately followed by zero or more lowercase a characters in 
chewieQuote. Your regex does not need flags or character classes, and it should not match 
any of the other quotes.
 */

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let longQuote = "Let him have it. It's not wise to upset Aaaaaa Wookiee."
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let firstQuote = chewieQuote.match(chewieRegex);
console.log(firstQuote);

let secondQuote = longQuote.match(chewieRegex);
console.log(secondQuote);