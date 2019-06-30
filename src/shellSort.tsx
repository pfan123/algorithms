function shellSort (arr:number[]):number[] {
  let len = arr.length
  let gap = 1

  while(gap < len/3) {          //动态定义间隔序列
      gap =gap*3+1
  }

  while (gap >= 1) {
      for (let i = gap; i < len; i++) {
          for (let j = i; j >= gap && arr[j] < arr[j-gap];j -= gap) {
              [arr[j], arr[j-gap]] = [arr[j-gap], arr[j]]
          }
      }
      gap = (gap-1)/3
  }

  return arr
}
