## 算法(algorithms)

线性时间（linear time）：最多需要猜测的次数与列表长度相同，这被称为线性时间。

[算法复杂度和大O表示法](./docs/算法复杂度和大O表示法.md)

[数组和链表](./docs/数组和链表.md)


## 二分查找（有序元素列表）

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

## 选择排序

```js
function selectionSort (arr:any[]) {
  const len = arr.length
  let minIndex
  let temp

  for(let i = 0; i < len -1 ; i ++){
      minIndex = i
      for(let j = i+1; j<len; j++){
          if(arr[j] < arr[minIndex]){
              minIndex = j
          }
      }

      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
  }

  return arr
}
```
