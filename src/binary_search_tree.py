#!/usr/bin/python
# -*- coding: UTF-8 -*-

# Node
class Node(object):
  def __init__(self, data, left, right):
    self.data = data
    self.left = left
    self.right = right

  def show(self):
    return self.data

# binarySearchTree
class binary_search_tree(object):
  def __init__(self):
    self.root = None

  def insert(self, data):
    n = Node(data, None, None)
    if self.root == None :
      self.root = n
    else:
      current = self.root
      while True:
        parent = current
        if data < current.data :
          current = current.left
          if current == None:
            parent.left = n
            break
        else:
          current = current.right
          if current == None:
            parent.right = n
            break

  # 中序遍历
  def inOrder(self, node):
    if node != None :
      self.inOrder(node.left)
      print(node.show())
      self.inOrder(node.right)

  # 先序遍历
  def preOrder(self, node):
    if node != None :
      print(node.show())
      self.preOrder(node.left)
      self.preOrder(node.right)

  # 先序遍历
  def postOrder(self, node):
    if node != None :
      self.postOrder(node.left)
      self.postOrder(node.right)
      print(node.show())

  # 查找最小值
  def getMin(self):
    current = self.root
    while current.left != None:
      current = current.left

    return current.data

  # 查找最大值
  def getMax(self):
    current = self.root
    while current.right != None:
      current = current.right

    return current.data

  def find(self, data):
    current = self.root
    while current != None:
      if current.data == data:
        return current
      elif data < current.data:
        current = current.left
      else:
        current = current.right

    return -1

nums = binary_search_tree()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)

print("Inorder traversal: ", nums.root.data)
nums.inOrder(nums.root)

print("PreOrder traversal: ", nums.root.data)
nums.preOrder(nums.root)

print("PostOrder traversal: ", nums.root.data)
nums.postOrder(nums.root)

print('获取最小值', nums.getMin())
print('获取最大值', nums.getMax())
print('查找值为0', nums.find(99))
