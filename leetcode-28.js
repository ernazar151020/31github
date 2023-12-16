// Sliding window technique
// Optimize solution for longest substring

const optimizedLongestSubstring = str => {
  if (str.length <= 1) return str.length

  const seenChars = {}
  let left = 0
  let longest = 0

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right]
    const prevSeenChar = seenChars[currentChar]
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1
    }
    seenChars[currentChar] = right
    longest = Math.max(longest, right - left + 1)
  }

  return longest
}

const res = optimizedLongestSubstring('abcfcabb')

console.log(res)
