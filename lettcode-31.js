// You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

const buyChoco = (prices, money) => {
  let sum = 0
  for (let i = 0; i < prices.length; i++) {
    const currentSum = prices[i] + prices[i + 1]
    if (currentSum < money) {
      if (sum === 0) {
        sum = currentSum
      } else {
        sum = Math.min(sum, currentSum)
      }
    }
  }

  if (sum > money) {
    return money
  } else {
    return money - sum
  }

  console.log({ sum })
}

const res = buyChoco([1, 2, 2], 3)
const res2 = buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62) // 22 Output

console.log({ res, res2 })
