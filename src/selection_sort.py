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

    list[minIndex], list[i] = list[i], list[minIndex]


  return list

