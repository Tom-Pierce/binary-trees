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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tree = new Tree(array);
prettyPrint(tree.root);
// tree.insert(0);
// tree.insert(100);
// tree.insert(10);
// tree.insert(7);
prettyPrint(tree.root);
console.log(tree.find(1));
console.log("Level order traversal: ", tree.levelOrder());
console.log("Inorder traversal: ", tree.inorder());
console.log("Preorder traversal: ", tree.preorder());
console.log("Postorder traversal: ", tree.postorder());
console.log("Height: ", tree.height());