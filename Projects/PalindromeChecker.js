function PalindromeChecker(str) {

    // remove nonAplhanumaric and spaces form Str and converted into Lower case
    const filteredStr = str.replace((/[\W_]/ig), "").toLowerCase();

    //Split Str into Array
    const splitedArray = filteredStr.split('');

    //reversed Array
    const reveredArray = splitedArray.reverse();

    // join reveresed Array
    const joinReveresedArray = reveredArray.join('');

    
    const result = (joinReveresedArray == filteredStr) ? "Palindrome" : "Not Palindrome";
    console.log(result);

}
PalindromeChecker("eye");

/**
 * palindrome("_eye") should return true.

palindrome("race car") should return true.

palindrome("not a palindrome") should return false.

palindrome("A man, a plan, a canal. Panama") should return true.

palindrome("never odd or even") should return true.

palindrome("nope") should return false.

palindrome("almostomla") should return false.

palindrome("My age is 0, 0 si ega ym.") should return true.
 */