/* Problem Statement:
Write a function called 'same', which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.

Examples:
same([1, 2, 3], [4, 1, 9]); => true
same([1, 2, 3], [1, 9]); => false
same([1, 2, 1], [4, 4, 1]); => false (must be same frequency)
same([1, 2, 1], [1, 4, 1]); => true
*/

// Akshay's Naive way:
function akshaySame(source, dest) {
  if (!(Array.isArray(source) && Array.isArray(dest))) {
    throw new Error('Expected to pass arrays in this function!');
  }

  if (source.length !== dest.length) {
    return false;
  }

  let result = true;

  const sourceObj = {};
  source.forEach((element) => {
    sourceObj[element] = sourceObj[element] + 1 || 1;
  });

  const destObj = {};
  dest.forEach((element) => {
    destObj[element] = destObj[element] + 1 || 1;
  });

  for (let i = 0; i < source.length; i++) {
    const element = source[i];
    if (sourceObj[element] !== destObj[element ** 2]) {
      result = false;
      break;
    }
  }

  return result;
}

// Shirish's Way:
function shirishSame(source, dest) {
  if (!(Array.isArray(source) && Array.isArray(dest))) {
    throw new Error('Expected to pass arrays in this function!');
  }

  if (source.length !== dest.length) {
    return false;
  }

  let result = true;

  source.sort();
  dest.sort();

  for (let i = 0; i < source.length; i++) {
    if (dest[i] !== source[i] ** 2) {
      result = false;
      break;
    }
  }

  return result;
}

// Instructor's Frequency Counter Way:
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 1], [1, 1, 4]));
