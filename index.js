import Tree from "./tree.js";
import Node from "./node.js";
import { prettyPrint } from "./pretty-print.js";

export const buildTree = (array, start = 0, end = array.length - 1) => {
  if (start > end) return null;

  const mid = parseInt((start + end) / 2);
  const root = array[mid];
  const node = new Node();
  node.data = root;
  node.left = buildTree(array, start, mid - 1);
  node.right = buildTree(array, mid + 1, end);
  return node;
};

const array = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
const tree = new Tree(array);
console.log("Balanced tree: ", tree.isBalanced());
console.log("Level order traversal: ", tree.levelOrder());
console.log("Preorder traversal: ", tree.preorder());
console.log("Postorder traversal: ", tree.postorder());
console.log("Inorder traversal: ", tree.inorder());
tree.insert(109);
tree.insert(432);
tree.insert(912);
tree.insert(176);
tree.insert(287);
console.log("Balanced tree: ", tree.isBalanced());
tree.rebalance();
console.log("Balanced tree: ", tree.isBalanced());
tree.insert(109);
tree.insert(432);
tree.insert(912);
tree.insert(176);
tree.insert(287);
prettyPrint(tree.root);
