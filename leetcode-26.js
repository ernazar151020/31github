// Find longest not repeated substring

const longestSubstring = str => {
  console.log(str.length)
  if (str.length <= 1) return str.length

  let longest = 0

  for (let left = 0; left < str.length; left++) {
    const seenChars = {}
    let currentLength = 0
    for (let right = left; right < str.length; right++) {
      if (!seenChars[str[right]]) {
        currentLength++
        seenChars[str[right]] = true
        longest = Math.max(longest, currentLength)
      } else {
        break
      }
    }
  }
  return longest
}

const res = longestSubstring('abccabb')

console.log(res)
