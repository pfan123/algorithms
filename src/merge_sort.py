#!/usr/bin/python
# -*- coding: UTF-8 -*-
import math

# 采用自上而下的递归方法
def merge_sort(array = []):
    long = len(array)
    if long < 2 : # 基线条件
      return array

    middle = math.floor(long / 2)
    left, right = array[0:middle], array[middle:]

    return merge(merge_sort(left), merge_sort(right))

def merge(left = [], right = []):
    result = []
    while left and right:
        if (left[0] <= right[0]) :
            result.append(left.pop(0))
        else :
            result.append(right.pop(0))

    while left:
        result.append(left.pop(0))

    while right:
        result.append(right.pop(0))

    return result

