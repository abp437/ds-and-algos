function linearSearch(arr, searchTerm) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return i;
    }
  }

  return -1;
}

function main() {
  const elemIndex = linearSearch([32, 25, 56, 87, 999, 26], 999);

  if (elemIndex > 0) {
    console.log(`The element is at index ${elemIndex}`);
  } else {
    console.log('Element not found.');
  }
}

main();
