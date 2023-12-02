// Que

// Que is a first in first out
// Stack is a first in last out

class Que {
  constructor () {
    this.in = []
    this.out = []
  }

  enque (val) {
    this.in.push(val)
  }
  deque () {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop())
      }
    }
    return this.out.pop()
  }

  peak () {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop())
      }
    }

    return this.out[this.out.length - 1]
  }

  empty () {
    return this.length === 0 && this.in.length === 0 && this.out.length == 0
  }
}
