export function shuffleArray(array: any[], size?: number) {
  let nativeFloor = Math.floor, nativeRandom = Math.random;

  function baseRandom(lower: number, upper: number) {
    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
  }

  let index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    let rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}