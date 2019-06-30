function selectionSort (arr:number[]):number[] {
  const len = arr.length
  let minIndex

  for(let i = 0; i < len -1 ; i ++){
      minIndex = i
      for(let j = i+1; j<len; j++){
          if(arr[j] < arr[minIndex]){
              minIndex = j
          }
      }

      [ arr[minIndex], arr[i] ] = [ arr[i], arr[minIndex] ]
  }

  return arr
}



