// merge continuously repeted elements

const mergeRepeatedElements = str => {
  let currentValue = str[0]
  let count = 1
  const result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === currentValue) {
      count++
    } else {
      currentValue = currentValue[i]
      result += currentValue + count > 1 ? count : ''
      count = 1
    }
  }

  return result
}

const res = mergeRepeatedElements('aaabbbcdd')

console.log(res)
