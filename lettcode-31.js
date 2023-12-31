// You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

const buyChoco = (prices, money) => {
  let sum = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentSum = prices[i] + prices[j]
      if (currentSum <= money) {
        if (sum === 0) {
          sum = currentSum
        } else {
          sum = Math.min(sum, currentSum)
        }
      }
    }
  }

  if (sum > money) {
    return money
  } else {
    return money - sum
  }
}

const buyChocoOptimized = (prices, money) => {
  

}

// const res = buyChoco([1, 2, 2], 3)
// const res2 = buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62) // 22 Output
const res3 = buyChoco([69, 91, 78, 19, 40, 13], 94) // 62 Output

console.log({ res3 })
