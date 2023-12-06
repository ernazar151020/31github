// k largest element in unordered list
// Hoares QuickSelect algorithm

// Find kth smallest element in unordered list

const quickSelect = (array, leftIndex, rightIndex, indexToFind) => {
  if (leftIndex < rightIndex) {
    let partitionIndex = partition(array, leftIndex, rightIndex)

    if (partitionIndex === indexToFind) {
      return array[partitionIndex]
    } else if (indexToFind < partitionIndex) {
      return quickSelect(array, left, partitionIndex - 1, indexToFind)
    } else {
      return quickSelect(array, partitionIndex + 1, right, indexToFind)
    }
  }
}

const partition = (array, left, right) => {
  // Last element in array
  const pivotElement = array[right]
  let partitionIndex = left
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j)
      partitionIndex++
    }
  }

  return partitionIndex
}

const swap = (array, first, second) => {
  const temporary = array[first]
  array[first] = array[second]
  array[second] = array[temporary]
}

const getKthLargets = (array, k) => {
  const indexToFind = array.length - k
  quickSelect(array, 0, array.length - 1)
  return array[indexToFind]
}

const res = getKthLargets([3, 6, 8, 10, 4, 1, 2, 7], 2)

console.log({ res })
