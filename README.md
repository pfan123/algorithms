## 算法(algorithms)

线性时间（linear time）：最多需要猜测的次数与列表长度相同，这被称为线性时间。

[算法复杂度和大O表示法](./docs/算法复杂度和大O表示法.md)


## 二分查找

```js
  function binarySearch(arr, value){
    let start = 0
    let end = arr.length() -1
    let guess
    while(start <= end){
      let mid = Math.ceil((start + end)/2)
      guess = arr[mid]
      if(guess == value)return mid
      if(guess > value) end = mid -1
      if(guess < value) start = mid + 1
    }

    return  -1
  }
```

def binary_search(list, value):
  low = 0
  high = len(list) - 1
  while(low <= high):
    mid = (low + high)
    guess = list[mid]
    if guess == item:
      return mid
    if guess > item:  
      high = mid - 1
    else:
      low = mid + 1
    return None

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3))
