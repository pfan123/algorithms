/**
 * Node
 */
class Node{
  public data
  public left
  public right

  constructor(data, left, right){
    this.data = data
    this.left = left
    this.right = right
  }

  show () {
    return this.data
  }
}

/**
 * binarySearchTree
 */
class binarySearchTree {
  public root

  constructor () {
    this.root = null
  }

  insert (data) {
    const n = new Node(data, null, null);
    if (this.root == null) {
      this.root = n
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = n
            break
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = n
            break
          }
        }
      }
    }
  }

  // 中序遍历
  inOrder (node) {
    if (node !== null) {
       this.inOrder(node.left)
       console.log(node.show() + " ")
       this.inOrder(node.right)
    }
  }

  // 先序遍历
  preOrder (node) {
    if (node !== null) {
      console.log(node.show() + " ")
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  // 后序遍历
  postOrder (node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show() + " ")
    }
  }

  // 查找最小值
  getMin () {
    let current = this.root
    while (current.left !== null) {
       current = current.left
    }
    return current.data
  }

  // 查找最大值
  getMax () {
    let current = this.root
    while (current.right !== null) {
       current = current.right
    }
    return current.data
  }

  find (data) {
    let current = this.root
    while (current.data !== null) {
      if (current.data === data) {
        return current
      } else if (data < current.data ) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return -1
  }
}

var nums = new binarySearchTree()
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log("Inorder traversal: ", nums.root.data);
nums.inOrder(nums.root);

console.log("PreOrder traversal: ", nums.root.data);
nums.preOrder(nums.root)

console.log("PostOrder traversal: ", nums.root.data);
nums.postOrder(nums.root)

