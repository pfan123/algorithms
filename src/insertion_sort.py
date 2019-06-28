#!/usr/bin/python
# -*- coding: UTF-8 -*-

def insertionSort (arr = []):
  long = len(arr)
  for i in range(1, long):
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 and arr[preIndex] > current):
      arr[preIndex+1], arr[preIndex] = arr[preIndex], arr[preIndex+1]
      preIndex -= 1

  return arr
