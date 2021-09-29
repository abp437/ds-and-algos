class ArrayRotation {
  // Any Fields or Methods which start with `#` are private by default

  // Private Fields to be used in the class need to be declared above constructor
  #arr;

  constructor(arr) {
    this.#arr = arr;
  }

  // Public Methods

  rotateArr(rotateFactor = 0) {
    const reducedFactor = rotateFactor % this.#arr.length;
    if (reducedFactor === 0) return this.#arr;
    if (reducedFactor > 0) return this.#rotatePositive(reducedFactor);
    return this.#rotateNegative(reducedFactor);
  }

  // Private Methods

  createArray(start, end) {
    const arr = [];
    for (let i = start; i < end; i++) {
      arr.push(this.#arr[i]);
    }

    return arr;
  }

  #swapArrayBlocksOnIndex(breakIndex) {
    return [
      ...this.createArray(breakIndex, this.#arr.length),
      ...this.createArray(0, breakIndex),
    ];
  }

  #rotatePositive(reducedFactor) {
    const breakIndex = this.#arr.length - reducedFactor;
    return this.#swapArrayBlocksOnIndex(breakIndex);
  }

  #rotateNegative(reducedFactor) {
    const breakIndex = Math.abs(reducedFactor);
    return this.#swapArrayBlocksOnIndex(breakIndex);
  }
}

function main() {
  const arrRotation = new ArrayRotation([32, 25, 56, 87, 999, 26]);

  console.log(arrRotation.rotateArr());
  console.log(arrRotation.rotateArr(-4));
  console.log(arrRotation.rotateArr(4));
}

main();
