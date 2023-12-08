// Given an array of integesr sorted in ascending order , return the starting and ending index of a given target value in an array [x,y]
// Your solution should run in O(logN) time

// [1,1,1,2,2,3,4,5,5,5,6,7]  => target=5 , [7,9] 5 тин башталганы жана аягын табабыз

const binarySearch = (array, start, end, target) => {
  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    let foundValue = array[middle]
    if (foundValue === target) {
      return middle
    } else if (foundValue < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  return -1
}

const searchRange = (nums, target) => {
  if (nums.length === 0) return [-1, -1]
}

const res = searchRange([1, 1, 2, 3, 4, 5, 5, 5, 6, 6], 5)

console.log(res)
