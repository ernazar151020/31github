const twoSumsWithMap = (arr, target) => {
  const memory = new Map()

  for (let i = 0; i < arr.length; i++) {
    const numberToFind = target - arr[i]
    if (memory.has(arr[i])) {
      return [memory.get(arr[i]), i]
    }
    memory.set(numberToFind, i)
  }
}

let res = twoSumsWithMap([1, 2, 4, 6, 7], 3)
console.log({ res })

// asdadasdas

const twoSumsWithObj = (arr, target) => {
  const memory = {}

  for (let i = 0; i < arr.length; i++) {
    const numberToFind = target - arr[i]
    if (memory[arr[i]] !== undefined) {
      return [memory[arr[i]], i]
    }
    memory[numberToFind] = i
  }
}

const resObj = twoSumsWithObj([1, 2, 4, 6, 7], 13)
