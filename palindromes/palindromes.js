const palindromes = function(str) {
    var rePallindrome = /[^A-Za-z0-9]/g //regex for punctuation only
    var lowerStr = str.toLowerCase().replace(rePallindrome, ''); 
    //removes punctuation and turns to lowercase
    var reverseString = lowerStr.split('').reverse().join('');

    return reverseString === lowerStr;


}

module.exports = palindromes
