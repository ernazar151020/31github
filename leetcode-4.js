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

const optimizedSolution = (s, t) => {
  let p1 = s.length - 1
  let p2 = t.length - 1
  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backcount = 2
        while (backcount > 0) {
          p1--
          backcount--
          if (s[p1] === '#') {
            backcount = backcount + 2
          }
        }
      }
      if (t[p2] === '#') {
        let backcount = 2
        while (backcount > 0) {
          p2--
          backcount--
          if (t[p2] === '#') {
            backcount = backcount + 2
          }
        }
      } else {
        if (s[p1] !== t[p2]) {
          return false
        } else {
          p1--
          p2--
        }
      }
    }
    return true
  }
}

const ress = optimizedSolution('ab#z', 'az#z')

console.log({ ress })
