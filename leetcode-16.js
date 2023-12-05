// Sorting with recursion

// Quick sort sorts array in place , does not return new array

// Sort element

// Divide and Conquer is algorithmic paradigm
// 1.Multi-branched recursion
// 2.Breaks a problem into multiple smaller but same sub problems
// 3.Combines the solutions of sub-problems into the solution for the original problem

const quickSort = (array, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let partitionIndex = partition(array, leftIndex, rightIndex)

    quickSort(array, leftIndex, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, rightIndex)
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
  quickSort(array, 0, array.length - 1)
  return array[indexToFind]
}

const res = getKthLargets([3, 6, 8, 10, 4, 1, 2, 7], 2)

console.log({ res })
