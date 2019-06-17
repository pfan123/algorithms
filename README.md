## 算法(algorithms)

算法是如何解决一类问题的明确规范。算法是一组精确定义操作序列的规则。

## 数据结构

数据结构是在计算机中组织和存储数据的一种特殊方式，使得数据可以高效地被访问和修改。更确切地说，数据结构是数据值的集合，表示数据之间的关系，也包括了作用在数据上的函数或操作。

- 数组
- 链表 (单向链表和双向链表)
- 队列（queue， 入队、出队）
- 栈 (stack、call stack，压入、弹出)
- 哈希表（hash table 散列，数组结构）
- 堆（heap 又称优先队列 priority queue）
- 字典树
- 树
  - 二叉查找树(binary search tree)
  - AVL 树
  - 红黑树
  - 后缀树
  - 线段树 或 间隔树
  - 二叉索引树
- 图 (有向图与无向图)
- 集合 (set, 并集、交集、补集)

## 算法主题

- 搜索
  - 二分查找
- 排序
  - 冒泡排序
  - 选择排序
  - 插入排序
  - 堆排序
  - 归并排序
  - 快速排序
  - 希尔排序

## 算法复杂度

## 大O表示法


## 文章

[算法复杂度和大O表示法](./docs/算法复杂度和大O表示法.md)

[数组和链表](./docs/数组和链表.md)

[递归和快速排序](./docs/递归.md)

[散列表 hash table](./docs/散列表.md)

[二叉树和二叉查找树](./docs/二叉树和二叉查找树.md)

[检索算法](./docs/检索算法.md)

[广度优先搜索](./docs/广度优先搜索.md)

[狄克斯特拉算法](./docs/狄克斯特拉算法.md)

[贪婪算法、近似算法、NP完全问题](./docs/贪婪算法与近似算法NP完全问题.md)

[动态规划](./docs/动态规划.md)

K最近邻算法


## 二分查找（有序元素列表）

```js
  function binarySearch(arr, value){
    let start = 0
    let end = arr.length() -1
    let guess
    while(start <= end){
      let mid = Math.ceil((start + end)/2)
      guess = arr[mid]
      if(guess == value)return mid
      if(guess > value) end = mid -1
      if(guess < value) start = mid + 1
    }

    return  -1
  }
```

## 选择排序

```js
function selectionSort (arr:number[]) {
  const len = arr.length
  let minIndex
  let temp

  for(let i = 0; i < len -1 ; i ++){
      minIndex = i
      for(let j = i+1; j<len; j++){
          if(arr[j] < arr[minIndex]){
              minIndex = j
          }
      }

      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
  }

  return arr
}
```

## 快速排序

```js
function quickSort (array:number[]) {
  const len = array.length
  if(len < 2) return array  // 基线条件

  // 递归条件
  let pivot = array[0] // 基准值
  let left = []
  let right = []

  // 分区（partition）
  for(let i = 1; i < len; i++){
    if( array[i] <= pivot ){
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

```

## 二叉树

```js
class Node{
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

```


## Other Resouces:

[动画可视化数据结构和算法工具-visualgo](https://visualgo.net/en)

[leetcode](https://leetcode.com/problemset/all/)

[剑指Offer](https://github.com/Jack-Cherish/LeetCode)
