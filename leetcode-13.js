const bracket = {
  '(': ')'
}

const removeBracket = str => {
  const memory = []
  const res = str.split('')

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      memory.push(i)
    } else if (res[i] === ')' && memory.length) {
      memory.pop()
    } else if (res[i] === ')') {
      res[i] = ''
    }

    while (memory.length) {
      const currentIndex = memory.pop()
      res[currentIndex] = ''
    }
  }

  return res.join('')
}

const res = removeBracket('ab)c(d)')

console.log({ res })
