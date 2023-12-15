// Given array of integers  , find two contigious integers thatforms the geatest sum

// 1.Find the sum
const greatestSum = nums => {
  let greatest = 0

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let next = nums[i + 1]
    let sum = nums[current] + nums[next]
    greatest = Math.max(greatest, sum)
  }

  return greatest
}

const res = greatestSum([1, 3, 7, 9, 2, 4])

console.log({ res })
