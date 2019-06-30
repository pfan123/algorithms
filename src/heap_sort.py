#!/usr/bin/python
# -*- coding: UTF-8 -*-

class Node(object):
  def __init__(self, data, left, right):
    self.data = data
    self.left = left
    self.right = right

  def show(self):
    return self.data

# BinarySearchTree
class BinarySearchTree(object):
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

  # 中序遍历
  def inOrder(self, node, arr = []):
    if node != None :
      self.inOrder(node.left, arr)
      arr.append(node.show())
      self.inOrder(node.right, arr)

  def getOrder(self):
      orderArr = []
      self.inOrder(self.root, orderArr)
      return orderArr

def heapSort (array = []):
    long = len(array)
    if long < 2: # 基线条件
      return array
    binarySearchTree = BinarySearchTree()
    for i in range(0, long):
      binarySearchTree.insert(array[i])
    return binarySearchTree.getOrder()
