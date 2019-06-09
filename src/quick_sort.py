#!/usr/bin/python
# -*- coding: UTF-8 -*-

def quicksort(array):
  if(len(array) < 2):
    return array  # 基线条件:为空或只包含一个元素的数组是“有序”的
  else: # 递归条件
    pivot = array[0] # 基准值
    less = [ i for i in array[1:] if i <= pivot]  # 分区（partition）
    greater = [ i for i in array[1:] if i > pivot] # 分区（partition）
    return quicksort(less) + [pivot] + quicksort(greater)
