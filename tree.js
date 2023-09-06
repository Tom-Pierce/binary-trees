import { buildTree } from "./index.js";

export default class Tree {
  constructor(array) {
    //sort and filter out duplicates

    array.sort((a, b) => a - b);
    array = [...new Set(array)];
    this.root = buildTree(array, 0, array.length - 1);
  }
}
