const getMaxWaterContainer = heights => {
  let maxArea = 0
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      let area = Math.min(heights[p1], heights[p2]) * (p2 - p1)
      maxArea = Math.max(maxArea, area)
    }
  }
  return maxArea
}

let res = getMaxWaterContainer([7, 1, 2, 3])

console.log(res)

const getMaxAreaOptilamSol = heights => {
  let left = 0
  let right = heights.length - 1
  let maxArea = 0

  while (right > left) {
    const area = Math.min(heights[left], heights[right]) * (right - left)
    maxArea = Math.max(maxArea, area)
    left++
    right--
  }

  return maxArea
}

let res2 = getMaxAreaOptilamSol([7, 1, 2, 3])

console.log(res2)
