def bubbleSort (arr = []):
  length = len(arr) - 1

  for i in range(length, 0, -1):
    for j in range(0, i):
      if arr[j] > arr[i]:
        arr[j], arr[i] = arr[i], arr[j]

  return arr
