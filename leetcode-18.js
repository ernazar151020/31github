// Binary Search
// Binary Search is only for sorted arrays
// Time complexity of Binary search is O(logn)

const binarySearch = (array, target) => {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const foundValue = array[middle]
    if (foundValue === target) {
      return middle
    } else if (foundValue < target) {
      left = middle + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

const res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)

console.log(res)
