// Given an array of integres representing an elevation map where the width of each bar is 1 , return how much rainwater can be trapped

const calculateRainWater = nums => {
  let total = 0
  for (let p = 0; p < nums.length; p++) {
    let leftP = p
    let rightP = p
    let maxRight = 0
    let maxLeft = 0
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, nums[leftP])
      leftP--
    }
    while (rightP < nums.length) {
      maxRight = Math.max(maxRight, nums[rightP])
      rightP++
    }
  }
  const currentWater = Math.min(maxLeft, maxRight) - nums[p]

  if (currentWater >= 0) {
    total += currentWater
  }

  return total
}

const res = calculateRainWater([5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1])

console.log(res)
