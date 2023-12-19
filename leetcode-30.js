// Almost polindrome
// Strings
// Subproblems
// Palindromes

// Given a string , determine if it is almost a polindrome . A string is almost a polindrome if it becomes a polindrome by removing 1 letter . Consider only alphanumeric characters and ignore case sensitivity

const validPolindrome = str => {
  const transformStr = str.replace(/[^A-Za-z0-9]/g, '')
  let left = 0
  let right = transformStr.length - 1

  while (left < right) {
    if (transformStr[left] !== transformStr[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

const isAlmostPolindrome = str => {}

const res = isAlmostPolindrome('race a car')
const res2 = validPolindrome('race a car')

console.log({ res2 })
