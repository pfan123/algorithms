#!/usr/bin/python
# -*- coding: UTF-8 -*-
import math

def binary_search(list, value):
  low = 0
  high = len(list) - 1

  while(low <= high):
    mid = math.ceil((low + high)/2)
    guess = list[mid]
    if guess == value:
      return mid
    if guess > value:
      high = mid - 1
    else:
      low = mid + 1

  return None

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 9))
