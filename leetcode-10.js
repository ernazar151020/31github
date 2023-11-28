const flattenLinkedList = head => {
  if (!head) return head
  let currentNode = head

  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next
    } else {
      let tail = currentNode.child
      while (tail.next !== null) {
        tail = tail.next
      }
    }
  }
}
