// Binary Search
// Binary Search is only for sorted arrays
// Time complexity of Binary search is O(logn)

const binarySearch = (array, target) => {
  const middle = array[array.length / 2]

  console.log({ middle })
}

const res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)

console.log(res)
