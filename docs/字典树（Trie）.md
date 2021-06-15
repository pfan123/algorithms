# 字典数（Trie）

原文：https://www.cxyxiaowu.com/1873.html

> Trie 这个名字取自“retrieval”，检索，因为 Trie 可以只用一个前缀便可以在一部字典中找到想要的单词。  

Trie 树，也叫“字典树”。顾名思义，它是一个**树形结构**。它是一种专门处理字符串匹配的数据结构，用来解决在一组字符串集合中快速查找某个字符串的问题。

此外 Trie 树也称前缀树（因为某节点的后代存在共同的前缀，比如 pan 是 panda 的前缀）。

它的 key 都为字符串，能做到高效查询和插入，时间复杂度为 O(k)，k 为字符串长度，缺点是如果大量字符串没有共同前缀时很耗内存。

**它的核心思想就是通过最大限度地减少无谓的字符串比较，使得查询高效率，即「用空间换时间」，再利用共同前缀来提高查询效率。**

## Trie树的特点

假设有 5 个字符串，它们分别是：code，cook，five，file，fat。现在需要在里面多次查找某个字符串是否存在。如果每次查找，都是拿要查找的字符串跟这 5 个字符串依次进行字符串匹配，那效率就比较低，有没有更高效的方法呢？

如果将这 5 个字符串组织成下图的结构，从肉眼上扫描过去感官上是不是比查找起来会更加迅速。

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058189-a4576e2b00b6dcd.jpg)Trie树样子

通过上图，可以发现 Trie树 的三个特点：

- 根节点不包含字符，除根节点外每一个节点都只包含一个字符
- 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串
- 每个节点的所有子节点包含的字符都不相同

通过动画理解 Trie 树构造的过程。在构造过程中的每一步，都相当于往 Trie 树中插入一个字符串。当所有字符串都插入完成之后，Trie 树就构造好了。

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058189-166c7d6cc9153f1.gif)Trie 树构造

## Trie树的插入操作

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058190-0303d0659a8b6a3.gif)

Trie树的插入操作

Trie树的插入操作很简单，其实就是将单词的每个字母逐一插入 Trie树。插入前先看字母对应的节点是否存在，存在则共享该节点，不存在则创建对应的节点。比如要插入新单词`cook`，就有下面几步：

- 插入第一个字母 `c`，发现 `root` 节点下方存在子节点 `c`，则共享节点 `c`
- 插入第二个字母 `o`，发现 `c` 节点下方存在子节点 `o`，则共享节点 `o`
- 插入第三个字母 `o`，发现 `o` 节点下方不存在子节点 `o`，则创建子节点 `o`
- 插入第三个字母 `k`，发现 `o` 节点下方不存在子节点 `k`，则创建子节点 `k`
- 至此，单词 `cook` 中所有字母已被插入 Trie树 中，然后设置节点 `k` 中的标志位，标记路径 root->c->o->o->k 这条路径上所有节点的字符可以组成一个单词`cook`

## Trie树的查询操作

在 Trie 树中查找一个字符串的时候，比如查找字符串 `code`，可以将要查找的字符串分割成单个的字符 c，o，d，e，然后从 Trie 树的根节点开始匹配。如图所示，绿色的路径就是在 Trie 树中匹配的路径。

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058190-0303d0659a8b6a3.jpg)

如果要查找的是字符串`cod`(鳕鱼)呢？还是可以用上面同样的方法，从根节点开始，沿着某条路径来匹配，如图所示，绿色的路径，是字符串`cod`匹配的路径。但是，路径的最后一个节点「d」并不是橙色的，并不是单词标志位，所以`cod`字符串不存在。也就是说，`cod`是某个字符串的前缀子串，但并不能完全匹配任何字符串。

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058190-618375dd47efc6c.jpg)

> 程序员不要当一条咸鱼，要向 `cook` 靠拢：）

## Trie树的删除操作

Trie树的删除操作与二叉树的删除操作有类似的地方，需要考虑删除的节点所处的位置，这里分三种情况进行分析：

### 删除整个单词（比如hi）

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058191-94165b26e701ff2.gif)

- 从根节点开始查找第一个字符`h`
- 找到`h`子节点后，继续查找`h`的下一个子节点`i`
- `i`是单词`hi`的标志位，将该标志位去掉
- `i`节点是`hi`的叶子节点，将其删除
- 删除后发现`h`节点为叶子节点，并且不是单词标志位，也将其删除
- 这样就完成了`hi`单词的删除操作

### 删除前缀单词（比如cod）

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058192-709fd3046873bab.gif)


这种方式删除比较简单。
只需要将`cod`单词整个字符串查找完后，`d`节点因为不是叶子节点，只需将其单词标志去掉即可。



### 删除分支单词（比如cook）

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058193-3839f4986701ec6.gif)


与 **删除整个单词** 情况类似，区别点在于删除到 `cook` 的第一个 `o` 时，该节点为非叶子节点，停止删除，这样就完成`cook`字符串的删除操作。



## Trie树的应用

事实上 Trie树 在日常生活中的使用随处可见，比如这个：

具体来说就是经常用于统计和排序大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。它的优点是：最大限度地减少无谓的字符串比较，查询效率比哈希表高。

### 1. 前缀匹配

例如：找出一个字符串集合中所有以 `五分钟` 开头的字符串。我们只需要用所有字符串构造一个 trie树，然后输出以 五−>分−>钟 开头的路径上的关键字即可。

trie树前缀匹配常用于搜索提示。如当输入一个网址，可以自动搜索出可能的选择。当没有完全匹配的搜索结果，可以返回前缀最相似的可能。

![看动画轻松理解「Trie树」](http://www.cxyxiaowu.com/wp-content/uploads/2019/10/1571058193-0b75e4a20936622.jpg)

### 2. 字符串检索

给出 N 个单词组成的熟词表，以及一篇全用小写英文书写的文章，按最早出现的顺序写出所有不在熟词表中的生词。

检索/查询功能是 Trie 树最原始的功能。给定一组字符串，查找某个字符串是否出现过，思路就是从根节点开始一个一个字符进行比较：

- 如果沿路比较，发现不同的字符，则表示该字符串在集合中不存在。
- 如果所有的字符全部比较完并且全部相同，还需判断最后一个节点的标志位（标记该节点是否代表一个关键字）。

## Trie树的局限性

Trie 的核心思想是空间换时间，利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

假设字符的种数有 `m` 个，有若干个长度为 n 的字符串构成了一个 Trie 树 ，则每个节点的出度为 `m`（即每个节点的可能子节点数量为 `m` ），Trie树 的高度为 `n`。很明显我们浪费了大量的空间来存储字符，此时 Trie 树的最坏空间复杂度为 `O(m^n)` 。也正由于每个节点的出度为 `m`，所以我们能够沿着树的一个个分支高效的向下逐个字符的查询，而不是遍历所有的字符串来查询，此时Trie树的最坏时间复杂度为 `O(n)` 。

这正是空间换时间的体现，也是利用公共前缀降低查询时间开销的体现。


```
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
```
