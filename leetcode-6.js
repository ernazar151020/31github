const polindrom = str => {
  const reversed = str.split('').reverse('')

  if (str === reversed.join('')) {
    return true
  }

  return false
}

const res = polindrom('abac')

console.log({ res })

// ***********IS VALID PALINDROME ****************

const isValidPolindrome = str => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

const res1 = isValidPolindrome('Am an , a plan , a canal:Panama')

console.log({ res1 })
