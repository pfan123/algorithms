function insertionSort (arr = []):number[] {
  const len = arr.length
  let preIndex
  let current

  for(let i = 1; i < len; i ++){
      preIndex = i - 1
      current = arr[i]
      while (preIndex >= 0 && arr[preIndex] > current) {
        [arr[preIndex+1], arr[preIndex]] = [arr[preIndex], arr[preIndex+1]]
        preIndex--
      }
  }

  return arr
}
