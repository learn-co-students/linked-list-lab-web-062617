function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, head, collection) {
  let currentNode = collection[head]
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt(index, head, collection) {
  return index === 0 ? head : nodeAt(index - 1, head, collection).next
}

function indexAt(node, collection, head) {
  let currentNode = collection[head]
  let count = 0
  while (currentNode !== node) {
    currentNode = next(currentNode, collection)
    count++
  }
  return count;
}

function insertNodeAt(index, newNodeKey, head, collection) {
  let currentNode = collection[head];
  let count = 0;
  while (count != index - 1) {
    currentNode = next(currentNode, collection)
    count ++
  }
  collection[newNodeKey].next = currentNode.next
  currentNode.next = newNodeKey
  return collection
}

function deleteNodeAt(index, head, collection) {
  let currentNode = collection[head]
  let nodeBeforeDelete = currentNode
  let nodeToDelete = next(nodeBeforeDelete, collection)
  let nodeAfterDelete = next(nodeToDelete, collection)
  let count = 0;
  while (count != index) {
    currentNode = next(currentNode, collection)
    count ++
  }
  nodeBeforeDelete.next = nodeToDelete.next
}
