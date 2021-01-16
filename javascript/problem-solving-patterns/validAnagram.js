/* Problem Statement:
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'.

Examples:
validAnagram('', '') => true
validAnagram('aaz', 'zza') => false
validAnagram('anagram', 'nagaram') => true
validAnagram('rat','car') => false
validAnagram('awesome', 'awesom') => false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') => false
validAnagram('qwerty', 'qeywrt') => true
validAnagram('texttwisttime', 'timetwisttext') => true

Note: You may assume the string contains only lowercase alphabets.
Time Complexity - O(n)
*/

// Naive Way:
function validAnagram(testString, anagram) {

}

// Instructor's Valid Anagram Frequency Counter Way:

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
