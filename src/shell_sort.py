#!/usr/bin/python
# -*- coding: UTF-8 -*-
import math

def shellSort (arr = []):
  long = len(arr)
  gap = 1

  while (gap < long/3) :  # 动态定义间隔序列
    gap = gap*3+1

  while gap >= 1 :
    for i in range(gap, long):
        j = i
        while j >= gap and arr[j] < arr[j-gap] :
          arr[j], arr[j-gap] = arr[j-gap], arr[j]
          j = j -gap

    gap = math.floor( (gap-1)/3 )

  return arr
