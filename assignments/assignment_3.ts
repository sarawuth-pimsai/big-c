function recursion(values, level, lindex, index, rows, outputs, loop) {
  if (level >= values.length || !values[level][index]) return
  rows.push(values[level][index])
  if (Array.isArray(values[level + 1])) {
    recursion(values, level + 1, lindex, index, rows, outputs, 'level')
    if (values[level][lindex + 1]) {
      const newRows = rows.slice(0, level)
      newRows.push(values[level][lindex + 1])
      // console.log({ loop: 'Change Level', newRows })
      recursion(values, level, lindex + 1, 0, newRows, outputs, loop)
    }
  } else {
    const newRows = rows.slice(0, level)
    newRows.push(values[level][index])
    console.log({ newRows })
    recursion(values, level, lindex, index + 1, newRows, outputs, 'index')
  }
}
const inputs = [
  [[1], [2], [3, 4], [5, 6], [7, 8]],
  [[1], [2, 3], [4, 5, 6]],
]
let outputs = []
recursion(inputs[1], 0, 0, 0, [], outputs, 'level')
// console.log({ count: outputs.length, outputs })
// console.log(outputs)
// console.log({ input: inputs[1], outputs })
