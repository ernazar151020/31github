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

  const firstPosition = binarySearch(nums, 0, nums.length - 1, target)

  if (firstPosition === -1) return [-1, -1]
  let startPosition = firstPosition
  let endPosition = firstPosition
  let temp1
  let temp2
  if (startPosition !== -1) {
    temp1 = startPosition
    startPosition = binarySearch(nums, 0, startPosition - 1, target)
  }
  startPosition = temp1
  while (endPosition !== -1) {
    temp2 = endPosition
    endPosition = binarySearch(nums, endPosition + 1, nums.length - 1, target)
  }
  endPosition = temp2
  return [startPosition, endPosition]
}

const res = searchRange([1, 1, 2, 3, 4, 5, 5, 5, 6, 6], 5)

console.log(res)
