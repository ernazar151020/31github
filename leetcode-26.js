// Find longest not repeated substring

const longestSubstring = str => {
  if (str.length === 0 || str.length === 1) return str.length
}

const res = longestSubstring('abccabb')

console.log(res)
