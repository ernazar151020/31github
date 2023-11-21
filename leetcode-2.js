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

let res = getMaxWaterContainer([7, 1, 2, 3, 9])

console.log(res)
