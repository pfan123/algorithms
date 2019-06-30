class Node {
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
 * BinarySearchTree 二分叉树类
 */
class BinarySearchTree {
  public root

  constructor () {
    this.root = null
  }

  insert (data) {
    const n = new Node(data, null, null);
    if (this.root === null) {
      this.root = n
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n
            break
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n
            break
          }
        }
      }
    }
  }

  // 中序遍历
  inOrder (node, arr = []) {
    if (node !== null) {
       this.inOrder(node.left, arr)
       arr.push(node.show())
       this.inOrder(node.right, arr)
    }
  }

  getOrder () {
      const orderArr = []
      this.inOrder(this.root, orderArr)
      return orderArr
  }

}

function heapSort(array: number[] = []):number[] {
    const len = array.length
    if(len < 2) return array  // 基线条件
    const binarySearchTree = new BinarySearchTree()
    for(let i = len - 1; i >= 0; i--){
        binarySearchTree.insert(array[i])
    }
    return binarySearchTree.getOrder()
}
