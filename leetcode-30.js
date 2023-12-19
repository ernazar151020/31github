// Almost polindrome
// Strings
// Subproblems
// Palindromes

// Given a string , determine if it is almost a polindrome . A string is almost a polindrome if it becomes a polindrome by removing 1 letter . Consider only alphanumeric characters and ignore case sensitivity

const validPolindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

const isAlmostPolindrome = str => {
  const transformStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  let left = 0
  let right = transformStr.length - 1
  while (left < right) {
    if (transformStr[left] !== transformStr[right]) {
      return (
        validPolindrome(transformStr, left + 1, right) ||
        validPolindrome(transformStr, left, right - 1)
      )
    }
    left++
    right--
  }
  return true
}

const res = isAlmostPolindrome('race a car')
const res2 = validPolindrome('racecar')

console.log({ res })
