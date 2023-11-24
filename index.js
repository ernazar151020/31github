const findGreatestSum = nums => {
  let left = 0
  let right = 1
  let greatest = 0
  let leftGreatest = 0
  let rightGreatest = 0
  while (right < nums.length) {
    const sum = nums[left] + nums[right]
    greatest = Math.max(greatest, sum)
    if (greatest > sum) {
      leftGreatest = nums[left]
      rightGreatest = nums[right]
    }
    left++
    right++
  }
  console.log({ leftGreatest, rightGreatest })
  return greatest
}

const res = findGreatestSum([1, 2, 7, 9, 2, 4])

console.log(res)
