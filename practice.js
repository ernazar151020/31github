// Given array of integers  , find two contigious integers thatforms the geatest sum

// 1.Find the sum
const greatestSum = nums => {
  let greatest = 0

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let next = nums[i + 1]
    let sum = current + next
    if (next) {
      greatest = Math.max(greatest, sum)
      console.log({ current, next, sum })
    }
  }

  return greatest
}

// const res = greatestSum([1, 3, 7, 9, 2, 4])

// console.log({ res })

// 1.Find the indexes

const findGreatestSumIndexes = nums => {
  const indexes = []
  let greatest = 0
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let next = nums[i + 1]
    let sum = current + next

    if (sum > greatest) {
      console.log('Sum is greater')
      indexes.push(nums[i], nums[i + 1])
    }
    if (next) {
      greatest = Math.max(greatest, sum)
    }
  }

  return { greatest, indexes }
}

const res2 = findGreatestSumIndexes([1, 3, 7, 9, 2, 4])

console.log({ res2 })
