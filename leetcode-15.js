// Tail recursion
// Normal recursion space O(n)
// Tail recursion space O(1)

// Noram recursion

function recFuctorial (x) {
  if (x <= 1) {
    return 1
  } else {
    console.log(x)
    return x * recFuctorial(x - 1)
  }
}

const res = recFuctorial(5)

console.log({ res })

// Tail recursion

function tailFactorial (x, totalSoFar = 1) {
  if (x === 0) {
    return totalSoFar
  } else {
    console.log({ totalSoFar })
    return tailFactorial(x - 1, totalSoFar * x)
  }
}

// Explanation
// tailFactorial(4)
// tailFactorial(4,1)
// tailFactorial(3,4)
// tailFactorial(2,12)
// tailFactorial(1,24)
// tailFactorial(0,24)

const res2 = tailFactorial(5)
console.log({ res2 })
