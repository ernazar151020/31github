const brackets = {
  '{': '}',
  '[': ']',
  '(': ')'
}

const validBrackets = str => {
  const memory = []

  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      memory.push(str[i])
    } else {
      const leftBracket = memory.pop()
      const correctBracket = brackets[leftBracket]
      if (str[i] !== correctBracket) return false
    }
  }

  return memory.length === 0
}

const res = validBrackets('{()}')

console.log({ res })
