// Find longest not repeated substring

const longestSubstring = str => {
  if (str.length <= 1) return str.length

  let longest = 0
  const seenChars = {}
  for (let right = 0; right < str.length; right++) {
    for (let left = right; left < str.length; left++) {
      let currentLength = 0
      if (!seenChars[left]) {
        currentLength++
        seenChars[left] = true
        longest = Math.max(longest, currentLength)
      } else {
        break
      }
    }
  }
}

const res = longestSubstring('abccabb')

console.log(res)
