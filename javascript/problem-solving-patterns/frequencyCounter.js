/* Problem Statement:
Write a function called 'same', which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.

Examples:
same([1, 2, 3], [4, 1, 9]); => true
same([1, 2, 3], [1, 9]); => false
same([1, 2, 1], [4, 4, 1]); => false (must be same frequency)
*/

// Naive way:

function same(source, dest) {
  if (!(Array.isArray(source) && Array.isArray(dest))) {
    throw new Error('Expected to pass arrays in this function!');
  }

  source.forEach((element) => {

  });

  return true
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));


// Frequency Counter Way:
