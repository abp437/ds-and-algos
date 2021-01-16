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
function akshayValidAnagram(testString, anagram) {
  if (!(typeof testString === 'string' && typeof anagram === 'string')) {
    throw new Error('Expected to pass strings in this function!');
  }

  const anagramLength = anagram.length;
  const testStringLength = testString.length;

  if (testStringLength !== anagramLength) {
    return false;
  }

  let result = true;

  const tesStringObj = {};
  for (let i = 0; i < testStringLength; i++) {
    const element = testString[i];
    tesStringObj[element] = (tesStringObj[element] || 0) + 1;
  }

  const anagramObj = {};
  for (let i = 0; i < anagramLength; i++) {
    const element = anagram[i];
    anagramObj[element] = (anagramObj[element] || 0) + 1;
  }

  for (const key in tesStringObj) {
    if (Object.hasOwnProperty.call(tesStringObj, key)) {
      if (tesStringObj[key] !== anagramObj[key]) {
        result = false;
        break;
      }
    }
  }

  return result;
}

// Instructor's Valid Anagram Frequency Counter Way:
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
