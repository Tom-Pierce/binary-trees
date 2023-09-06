import Tree from "./tree.js";
import Node from "./node.js";
import { prettyPrint } from "./pretty-print.js";

export const buildTree = (array, start, end) => {
  if (start > end) return null;

  const mid = parseInt((start + end) / 2);
  const root = array[mid];
  const node = new Node();
  node.data = root;
  node.left = buildTree(array, start, mid - 1);
  node.right = buildTree(array, mid + 1, end);
  return node;
};

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tree = new Tree(array);
prettyPrint(tree.root);
