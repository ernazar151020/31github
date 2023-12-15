const longestSubstring = str => {
  let longest = 0
  for (let left = 0; left < str.length; left++) {
    const seenChars = {}
    let currentCount = 0
    for (let right = left; right < str.length; right++) {
      if (!seenChars[str[right]]) {
        seenChars[str[right]]
        currentCount++
        longest = Math.max(longest, currentCount)
      } else {
        break
      }
    }
  }
}

const res = longestSubstring('abcddaacc')

console.log({ res })
