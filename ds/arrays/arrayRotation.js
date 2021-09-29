function swapArrayBlocksAfterIndex(arr, loopStartIndex) {
  const rotatedArr = [];

  for (let i = loopStartIndex; i < arr.length; i++) {
    const element = arr[i];
    rotatedArr.push(element);
  }

  for (let i = 0; i < loopStartIndex; i++) {
    const element = arr[i];
    rotatedArr.push(element);
  }

  return rotatedArr;
}

function rotateRight(arr, rotateFactor) {
  const loopStartIndex = arr.length - rotateFactor;
  return swapArrayBlocksAfterIndex(arr, loopStartIndex);
}

function rotateLeft(arr, rotateFactor) {
  const loopStartIndex = Math.abs(rotateFactor);
  return swapArrayBlocksAfterIndex(arr, loopStartIndex);
}

function rotateArr(arr, rotateFactor) {
  const reducedFactor = rotateFactor % arr.length;
  if (reducedFactor === 0) return arr;
  if (reducedFactor > 0)return rotateRight(arr, reducedFactor);
  return rotateLeft(arr, reducedFactor);
}

function main() {
  const rotatedArr = rotateArr([32, 25, 56, 87, 999, 26], -3);

  console.log(rotatedArr);
}

main();
