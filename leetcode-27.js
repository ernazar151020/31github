const longestSubstring = str => {
  let longest = 0
  for (let left = 0; left < str.length; left++) {
    const seenChars = {}
    let currentCount = 0
    for (let right = left; right < str.length; right++) {
      console.log({ seenChars })
      if (!seenChars[str[right]]) {
        seenChars[str[right]] = true
        currentCount++
        longest = Math.max(longest, currentCount)
      } else {
        break
      }
    }
  }
  return longest
}

const res = longestSubstring('abcddaacc')

console.log({ res })

// OPTIMIZED SOLUTION WITH SLIDING WINDOW TECHNIQUE
