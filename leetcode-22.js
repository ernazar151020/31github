// Optimized solution for previous example
const getGreatestAmountOptimized = nums => {
  let maxArea = 0

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let step = right - left
    let area = Math.min(nums[left], nums[right]) * step
    console.log({
      left: nums[left],
      right: nums[right],
      step,
      area
    })

    maxArea = Math.max(maxArea, area)

    if (nums[left] > nums[right]) {
      right--
    } else {
      left++
    }
  }

  return maxArea
}

const res = getGreatestAmountOptimized([1, 8, 6, 2, 9, 4])

console.log(res)
