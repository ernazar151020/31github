// Given two string S and T  , return if they equal when both are typed out  . Any # that appears in the string counts as a backspace

const compareStrings = (s1, s2) => {
  const s1Result = modifiedString(s1)
  const s2Result = modifiedString(s2)
  if (s1Result === s2Result) {
    return true
  }
  return false
}

const modifiedString = str => {
  const memory = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      memory.pop()
    } else {
      memory.push(str[i])
    }
  }

  return memory.join('')
}

const res = compareStrings('abc#', 'ab#')

// console.log(res)
