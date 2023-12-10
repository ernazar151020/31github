// Array Question . Resolving Array questions

// You are given an array of positive integers where each integer represents the height of a vertical line on a chart . Find two lines which together with the x-axis forms a container that would hold the greatest amount of water . Return the ares of water it woild hold.

const getGreatestAmount = nums => {
  let maxArea = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let step = j - i
      let area = Math.min(nums[j], nums[i]) * step
      maxArea = Math.max(maxArea, area)
    }
  }

  return maxArea
}

const res = getGreatestAmount([1, 8, 6, 2])

console.log(res)
