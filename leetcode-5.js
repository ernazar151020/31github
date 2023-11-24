const longestSubstr = str => {
  const memory = new Map()
  let longest = 0
  let currentLength = 0

  for (let left = 0; left < str.length; left++) {
    for (let right = left; right < str.length; right++) {
      console.log({ left, right })
      if (!memory.get(str[right])) {
        memory.set(str[right], true)
        currentLength++
        longest = Math.max(longest, currentLength)
      } else {
        break
      }
    }
  }
  return longest
  console.log(memory)
}

const res = longestSubstr('abcbdca')
console.log(res)
