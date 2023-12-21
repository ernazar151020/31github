// //
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

const isPalindrome = str => {
  const toString = str.toString()

  console.log(typeof toString)
  const reversed = toString.split('').reverse().join('')
  console.log(reversed)
  if (toString === reversed) {
    return true
  }
  return false
}

const res = isPalindrome(121)

console.log({ res })
