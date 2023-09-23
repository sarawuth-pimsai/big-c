function recursion(values, level, index, rows, outputs) {
  if (level >= values.length || !values[level][index]) return
  const value = values[level][index]
  rows.push(value)
  if (Array.isArray(values[level + 1])) {
    recursion(values, level + 1, 0, rows, outputs)
  } else {
    outputs.push(rows)
  }
  const newRows = rows.slice(0, level)
  recursion(values, level, index + 1, newRows, outputs)
}
const inputs = [
  [[1], [2], [3, 4], [5, 6], [7, 8]],
  [[1], [2, 3], [4, 5, 6]],
]
for (const input of inputs) {
  const outputs = []
  recursion(input, 0, 0, [], outputs)
  console.log(outputs)
}
