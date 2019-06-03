#!/usr/bin/python
# -*- coding: UTF-8 -*-
import math

def selection_sort(list):
  low = 0
  long = len(list)

  for i in range(long-1):
    minIndex = i

    for j in range(i+1, long):
      if(list[j] < list[minIndex]):
        minIndex = j

    temp = list[i]
    list[i] = list[minIndex]
    list[minIndex] = temp


  return list

# my_list = [1, 3, 5, 7, 9]

# print(selection_sort(my_list))
