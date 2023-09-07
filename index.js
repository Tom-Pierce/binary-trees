import Tree from "./tree.js";
import { prettyPrint } from "./pretty-print.js";

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
