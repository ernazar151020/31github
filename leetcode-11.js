const findCycleInLinkedList = head => {
  let currentNode = head
  const seenNodes = new Set()
  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return false
    }
    seenNodes.add(currentNode)
    currentNode = currentNode.next
  }

  return currentNode
}

// Floyds Tortoise and Hare Algortihm

const hareTortise = head => {
  let hare = head
  let tortoise = head
  while (true) {
    hare = hare.next
    tortoise = tortoise.next
    if (hare === null || hare.next === null) {
      return false
    } else {
      hare = hare.next
    }
    if (tortoise === hare) break
  }

  let p1 = head
  let p2 = tortoise

  while (p1 !== p2) {
    p1 = p1.next
    p2 = p2.next
  }

  console.log({ p1, p2 })

  return p1
}
