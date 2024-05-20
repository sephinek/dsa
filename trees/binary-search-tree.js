class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // LEFT
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  // remove(value) {
  //   if (!this.root) return false;

  //   let currentNode = this.root;
  //   let parentNode = null;
  //   while (currentNode) {
  //     if (value < currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.left;
  //     } else if (value > currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.right;
  //     } else if (value === currentNode.value) {
  //       break;
  //     } else {
  //       return false;
  //     }
  //   }

  //   if (!currentNode.right) {
  //     if (!parentNode) {
  //       this.root = currentNode.left;
  //     } else {
  //       if (currentNode.value < parentNode.value) {
  //         parentNode.left = currentNode.left;
  //       } else if (currentNode.value > parentNode.value) {
  //         parentNode.right = currentNode.left;
  //       }
  //     }
  //   } else if (!currentNode.right.left) {
  //     if (!parentNode) {
  //       this.root = currentNode.right;
  //     } else {
  //       currentNode.right.left = currentNode.left;
  //       if (currentNode.value < parentNode.value) {
  //         parentNode.left = currentNode.left;
  //       } else if (currentNode.value > parentNode.value) {
  //         parentNode.right = currentNode.right;
  //       } else {
  //         let leftmost = currentNode.right.left;
  //         let leftmostParent = currentNode.right;
  //         while (!leftmost.left) {
  //           leftmostParent = leftmost;
  //           leftmost = leftmost.left;
  //         }

  //         leftmostParent.left = leftmost.right;
  //         leftmost.left = currentNode.left;
  //         leftmost.right = currentNode.right;

  //         if (!parentNode) {
  //           this.root = leftmost;
  //         } else {
  //           if (currentNode.value < parentNode.value) {
  //             parentNode.left = leftmost;
  //           } else if (currentNode.value > parentNode.value) {
  //             parentNode.right = leftmost;
  //           }
  //         }
  //       }
  //       return true;
  //     }
  //   }
  // }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);
console.log(tree.lookup(90));
JSON.stringify(traverse(tree.root));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
