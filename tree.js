import { buildTree } from "./index.js";
import Node from "./node.js";

export default class Tree {
  constructor(array) {
    //sort and filter out duplicates

    array.sort((a, b) => a - b);
    array = [...new Set(array)];
    this.root = buildTree(array);
  }
  insert(data, node = this.root) {
    if (data === node.data) return;
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
      }
      this.insert(data, node.left);
    }
    if (data > node.data) {
      if (node.right === null) {
        node.right = new Node(data);
      }
      this.insert(data, node.right);
    }
  }
  delete(data, node = this.root) {
    if (node.data == null) return null;

    if (data < node.data) node.left = this.delete(data, node.left);
    else if (data > node.data) node.right = this.delete(data, node.right);
    else {
      if (node.left == null) return node.right;
      if (node.right == null) return node.left;

      node.data = this.#nextMinValue(node.right);
      node.right = this.delete(node.data, node.right);
    }
    return node;
  }

  find(data, node = this.root){
    if(node == null) return `Tree does not contain "${data}"`;
    if(data === node.data) return node;

    if(data < node.data) return this.find(data, node.left);
    if(data > node.data) return this.find(data, node.right);
  }

  #nextMinValue(node) {
    let minValue = node.data;
    while (node.left) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }
}
