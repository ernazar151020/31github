// Ploindrome
// Mostly will be given as a subpriblem

// 1
const aPolindrome = str => {
  // FIRST STEP
  //   const toArr = str.split('').reverse().join('')
  //   if (toArr === str) {
  //     return true
  //   }
  //   return false
  //   SECOND STEP

  let transformed = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  console.log(transformed)

  let left = 0
  let right = transformed.length - 1
  while (left < right) {
    if (transformed[left] !== transformed[right]) {
      return false
    }

    left++
    right--
  }
  return true
}

const res = aPolindrome('ererere')
const res2 = aPolindrome('A man , a plan , a canal:Panama')

console.log({ res, res2 })
