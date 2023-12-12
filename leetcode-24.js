// merge continuously repeted elements

const mergeRepeatedElements = str => {
  let count = 0
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      result += str[i] + (count > 1 ? count : '')
      count = 1
    }
    console.log({ result, count })
  }

  return result
}

const res = mergeRepeatedElements('aaabbbcdd')

console.log(res)
