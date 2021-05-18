// Trie 树，也叫“字典树”，是一个树形结构
class TrieNode {
  public val
  public isEnd
  private children
  constructor (val: string) {
    this.val = val
    this.isEnd = false // 当前节点的val字符结尾的单词
    this.children = {}
  }
}

/**
 * Initialize your data structure here.
 */
class Trie {
  private root
  private words
  constructor () {
    this.root = new TrieNode(null)
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert (word = '') {
    let curNode = this.root
    const keyList = word.split('')
    for (let i = 0; i < keyList.length; i++) {
      if (!curNode.children[keyList[i]]) {
        curNode.children[keyList[i]] = new TrieNode(keyList[i])
      }
      curNode = curNode.children[keyList[i]]

      // 遍历到最后一个字符所对应的节点，将这个节点的 isEnd 属性设为 true
      if(i === keyList.length - 1){
        curNode.isEnd = true
      }
    }
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search (word = '') {
    let curNode = this.root
    const keyList = word.split('')
    for(let i = 0; i < keyList.length; i++){
      if(!curNode.children[keyList[i]]){
        return false
      }
      curNode = curNode.children[keyList[i]]
      // 搜素到最后一个字符，根据 isEnd 属性判断是否曾经存过这个单词
      if(i === keyList.length - 1){
        return curNode.isEnd === true
      }
    }
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith (prefix = '') {
    let curNode = this.root
    const keyList = prefix.split('')
    for(let i = 0; i < keyList.length; i++){
      if(!curNode.children[keyList[i]]){
        return false
      }
      curNode = curNode.children[keyList[i]]
    }
    return true
  }

  /**
   * Delete word into the trie.
   * @param {string} word
   * @return {void}
   */
  delWord (word) {
    let curNode = this.root
    const keyList = word.split('')
    const temp = []
    let isMatch = false
    for(let i = 0; i < keyList.length; i++){
      if(!curNode.children[keyList[i]]){
        return false
      } else {
        temp.push(curNode.children[keyList[i]])
      }
      if(i === keyList.length - 1){
        isMatch = curNode.isEnd === true ? true : false
      }
    }

    if(isMatch && temp.length > 0) {
      for (let i = temp.length; i--;) {
        if (Object.keys(temp[i].children).length > 1) {
          break
        } else {
          if(i > 0) {
            delete temp[i - 1].children[temp[i].val]
          }
        }
      }
    }
  }

  printWords () {
    let curNode = this.root
    this.words = []
    for (let i in curNode.children) {
      this.printHelper(curNode.children[i], [curNode.children[i].val])
    }
    return this.words
  }

  printHelper (node, data) {
    if (Object.keys(node.children).length === 0) {
      this.words.push(data.join(''))
      return;
    }
    for (let i in node.children) {
      data.push(node.children[i].val)
      this.printHelper(node.children[i], data)
    }
  }
}

// 测试代码
// let trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple")); // 返回 true
// console.log(trie.search("app")); // 返回 false
// console.log(trie.startsWith("app")); // 返回 true
// trie.insert("app");
// console.log(trie.search("app"));// 返回 true
// trie.printWords()
