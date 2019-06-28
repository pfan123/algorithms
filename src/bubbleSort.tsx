function bubbleSort (arr = []):number[] {
  const len = arr.length - 1
  for ( let i = len; i > 0; i--) {
      for ( let j = 0; j <= i - 1; j++ ) {
          if (arr[j] > arr[i]) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
          }
      }
  }
  return arr
}
