function quickSort (array:number[]) {
  const len = array.length
  if(len < 2) return array  // 基线条件

  // 递归条件
  let pivot = array[0] // 基准值
  let left = []
  let right = []

  // 分区（partition）
  for(let i = 1; i < len; i++){
    if( array[i] <= pivot ){
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}
