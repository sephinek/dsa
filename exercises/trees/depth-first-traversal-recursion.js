class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

const result = recDepthFirstTraversal(root);
console.log(result);

function recDepthFirstTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node !== null) {
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);

  return result;
}
