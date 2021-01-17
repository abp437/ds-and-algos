/* Problem Statement:
Write a function called sumZero, which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array where both the values that sum to 0 or return 'undefined'

Examples:
sumZero([-3, -2, -1, 0, 1, 2, 3]) => [-3, 3]
sumZero([-2, 0, 1, 3]) => undefined
sumZero([1, 2, 3]) => undefined
sumZero([-4, -3, -2, -1, 0, 1, 2, 5])  => [-2, 2]
*/

// Naive way:
function akshaySumZero(sortedArray) {
  if (!Array.isArray(sortedArray)) {
    throw new Error("Expected to pass an array to this function!");
  }

  const arrayLength = sortedArray.length;
  let breakpoint;

  for (let i = 0; i < arrayLength; i++) {
    const leftElem = sortedArray[i];
    if (leftElem >= 0) {
      break;
    }
    const leftAbsValue = Math.abs(leftElem);

    for (let j = arrayLength - 1; j > 0; j--) {
      const rightElem = sortedArray[j];

      if (leftAbsValue > rightElem) {
        break;
      }

      if (rightElem === leftAbsValue) {
        breakpoint = rightElem;
        break;
      }
    }
    if (breakpoint) {
      return [leftElem, breakpoint];
    }
  }

  return;
}

// Instructor's Multiple Pointers Way:
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
