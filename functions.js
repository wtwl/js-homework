//1. Write a JavaScript function that reverse a number.
function reverseNumber(n) {
    let stringNumber = String(n);
    return stringNumber.split('').reverse().join('');
}

//2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}


//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord(str) {
    let longestIndex = 0;
    let longestWord = 0;
    let splitedStr = str.split(' ');

    for(let i = 0; i < splitedStr.length; i++) {
        if(splitedStr[i].length > longestWord) {
            longestWord = splitedStr[i].length;
            longestIndex = i;
        }
    }

    return splitedStr[longestIndex];

}

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function withCallBack(a, b, cb) {
    cb(a, b);
}

//20. Write a JavaScript function that generates a string id (specified length) of random characters.
function stringIdGenerator(len) {
    let text = "";
    let charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i=0; i < len; i++ ) {  
        text += charList.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}

//19. Write a JavaScript function that returns array elements larger than a number.
function arrElementsLaregerThanN(arr, n) {
    return arr.filter(x => x > n);
}

//9. Write a JavaScript function which accepts an argument and returns the type.
function typeofArg(x) {
    return typeof arguments[0];
}


//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exp(b, n) {
    let base = b;
    for(let i = 1; i < n; i++) {
        base *= b;
    }
    return b;
}

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function letterOccurences(str, letter) {

    let totalOcurences = 0;
    for(let i = 0; i < str; i++) {
        if(str[i] == letter) totalOcurences++; 
    }

    return totalOcurences;

}

