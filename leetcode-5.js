const longestSubstr = str => {
  const memory = new Map()
  let longest = 0
  let currentLength = 0

  for (let left = 0; left < str.length; left++) {
    for (let right = left; right < str.length; right++) {
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
}

const res = longestSubstr('abcbdca')
console.log(res)

const optimalSolution = str => {
  if (str.length <= 1) return str.length
  let left = 0
  let memory = {}
  let longest = 0
  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right]
    const prevSeen = memory[currentChar]
    if (prevSeen >= left) {
      left = prevSeen + 1
    }
    memory[currentChar] = right
    longest = Math.max(longest, right - left + 1)
  }

  console.log({ memory })

  return longest
}

const res1 = optimalSolution('abcbdca')
console.log(res1)
