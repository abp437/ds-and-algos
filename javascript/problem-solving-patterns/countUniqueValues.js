/* Problem Statement:
Implement a function called 'countUniqueValues',
which accepts a sorted array and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

Examples:
countUniqueValues([1, 1, 1, 1, 1, 2]) => 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) => 7
countUniqueValues([]) => 0
countUniqueValues([-2, -1, -1, 0, 1])  => 4
*/

// Naive way:
function akshayCountUniqueValues(sortedArray) {
  if (!Array.isArray(sortedArray)) {
    throw new Error('Expected to pass an array to this function!');
  }

  let left = 0;
  let right = sortedArray.length - 1;

  const uniqueSet = new Set();
  while (left < right) {
    uniqueSet.add(sortedArray[left]);
    uniqueSet.add(sortedArray[right]);
    left++;
    right--;
  }

  return uniqueSet.size;
}

// Instructor's Count Unique Values Way:
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
