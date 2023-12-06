/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().split("");
  let str2 = str.toLowerCase().split("").reverse();

  console.log(str1);
  console.log(str2);

  let palindrom = true;
  for (let index = 0; index < str1.length; index++) {
    if(str1[index]!=str2[index]){
      palindrom = false;
      break;
    }
  }
  return palindrom;
}

module.exports = isPalindrome;
