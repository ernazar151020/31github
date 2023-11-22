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

let res = getMaxWaterContainer([4, 8, 1, 2, 3, 9, 10])

console.log(res)

const getMaxAreaOptilamSol = heights => {
  let left = 0
  let right = heights.length - 1
  let maxArea = 0

  while (right > left) {
    let area = Math.min(heights[right], heights[left]) * (right - left)
    if (heights[right] < heights[left]) {
      right--
    } else {
      left++
    }
    maxArea = Math.max(maxArea, area)
  }

  return maxArea
}

let res2 = getMaxAreaOptilamSol([4, 8, 1, 2, 3, 9, 10])

console.log(res2)
