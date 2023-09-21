function recursion(values) {
  let stacks = []
  //   let level = 0
  //   let index = 1

  for (const level of Object.keys(values)) {
    if (Array.isArray(values[level])) {
      for (const index of Object.keys(values[level])) {
        console.log(`L${level} I${index}`)
      }
    }
  }
}

const inputs = [
  [[1], [2], [3, 4], [5, 6], [7, 8]],
  [[1], [2, 3], [4, 5, 6]],
]
let outputs: number[] = []
recursion(inputs[1] as [])
// console.log(outputs)
// console.log({ input: inputs[1], outputs })
