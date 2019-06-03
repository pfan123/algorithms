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
