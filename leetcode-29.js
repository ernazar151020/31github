// Ploindrome
// Mostly will be given as a subpriblem

// 1
const aPolindrome = str => {
  const toArr = str.split('').reverse().join('')
  if (toArr === str) {
    return true
  }
  return false
}

const res = aPolindrome('ererere')

console.log(res)
