interface Good {
  value: number
  size: number
}

const knapsack = (goods: Good[], capacity : number) => {
  goods.sort((a: Good, b: Good) => {
    return parseFloat(b.value / b.size) - parseFloat(a.value / a.size)
  })
  let load = 0
  let totalValues = 0
  let i = 0
  while (load < capacity && i < 4) {
    const { size, value } = goods[i]
    if ( size <= capacity - load)  {
      load += size
      totalValues += value
    } else {
      // 计算可以添加的比例值
      totalValues += (value / size) * (capacity - load)
      load = capacity
    }

    i++
  }

  return totalValues
}

// 测试代码
// knapsack([{size: 5, value: 50}, {size: 20, value: 140}, {size: 10, value: 60}, {size: 12, value: 60}], 30)
