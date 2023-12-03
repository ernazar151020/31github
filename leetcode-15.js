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
