function swapArrayBlocksAfterIndex(arr, swapElemIndex) {
  const rotatedArr = [];

  for (let i = swapElemIndex; i < arr.length; i++) {
    const el = arr[i];
    rotatedArr.push(el);
  }

  for (let i = 0; i < swapElemIndex; i++) {
    const el = arr[i];
    rotatedArr.push(el);
  }

  return rotatedArr;
}

function rotatePositive(arr, rotateFactor) {
  const swapElemIndex = arr.length - rotateFactor;
  return swapArrayBlocksAfterIndex(arr, swapElemIndex);
}

function rotateNegative(arr, rotateFactor) {
  const swapElemIndex = Math.abs(rotateFactor);
  return swapArrayBlocksAfterIndex(arr, swapElemIndex);
}

function rotateArr(arr, rotateFactor) {
  const reducedFactor = rotateFactor % arr.length;
  if (reducedFactor === 0) return arr;
  if (reducedFactor > 0) return rotatePositive(arr, reducedFactor);
  return rotateNegative(arr, reducedFactor);
}

function main() {
  const rotatedArr = rotateArr([32, 25, 56, 87, 999, 26], -4);

  console.log(rotatedArr);
}

main();
