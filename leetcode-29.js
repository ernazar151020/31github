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

  let left = 0
  let right = str.length - 1
  while (left < right) {
    left++
    right--
    if (str[left] === str[right]) {
      return true
    }
    return false
  }
}

const res = aPolindrome('ererere')

console.log(res)
