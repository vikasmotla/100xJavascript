/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join(""); 
  str2 = str2.toLowerCase().split("").sort().join("");
  return str1 === str2;
}
/*
split converts string to array, takes arg to split from, if empty all char will be splitted
join takes a seperator for each char.
e.g : [1,2,3].join(",");  ,1,2,3;

More Info can be done using, indexOf and includes with for loop:
  can be used on arr and string
  indexOf was created way before includes.
  [NaN].indexOf(NaN) // => -1 (not found)
  [NaN].includes(NaN) // => true
  No difference in performance : https://ryanpeden.com/javascript-indexof-vs-includes-performance/
*/

// isAnagram('Debit Card', 'Bad Credit');

module.exports = isAnagram;
