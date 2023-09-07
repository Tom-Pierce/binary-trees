import Node from "./node.js";

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
