class Node {
  constructor(data) {
    this.right = null;
    this.left = null;
    this.data = data;
  }
}

class Bst {
  insertSortedArray(array, start, end) {
    if (array == null || array.length === 0 || start > end) {
      return null;
    }
    var mid = (start + end) / 2;
    var root = new Node(array[mid]);
    root.left = this.insertSortedArray(array, start, mid - 1);
    root.right = this.insertSortedArray(array, mid + 1, end);
    return root;
  }

  preOrder(root) {
    // final preorder list
    const finalData = [];

    function traverse(node) {
      // push the data
      finalData.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(root);
    return finalData;
  }
  postOrder(root) {
    const finalData = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      // push the data
      finalData.push(node.data);
    }

    traverse(root);
    return finalData;
  }
  inOrder(root) {
    const finalData = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      finalData.push(node.data);
      if (node.right) traverse(node.right);
    }
    traverse(root);
    return finalData;
  }
  bfs(root) {
    let node = root;
    const queue = [node];
    const finalData = [];

    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      finalData.push(node.data);
    }

    return finalData;
  }
}

export default Bst;
