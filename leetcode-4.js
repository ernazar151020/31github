const areStringsEqual = (string1, string2) => {
  const firstString = modifyString(string1)
  const secondString = modifyString(string2)

  if (firstString === secondString) {
    return true
  }
  return false
}

const modifyString = string => {
  const newString = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '#') {
      newString.push(string[i])
    } else {
      newString.pop()
    }
  }

  return newString.join('')
}

const res = areStringsEqual('ab#z', 'az#z')

console.log('res', res)
