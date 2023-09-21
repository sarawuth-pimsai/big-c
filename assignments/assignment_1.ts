function mysolution(value: string): string {
  let result: string = ''
  let stacks: string[] = []
  let stocks: Record<string, number> = {}
  if (value && value.length > 0) {
    const values: string[] = value.toLocaleLowerCase().split('')
    for (const v of values) {
      if (!stocks[v]) {
        stacks.push(v)
        stocks[v] = 1
      } else {
        stocks[v]++
      }
    }
    for (const stack of stacks) {
      if (stocks[stack] === 1) {
        result = stack
        break
      }
    }
  }
  return result
}

const inputs: string[] = ['abacabadabacaba', 'programming']
for (const input of inputs) {
  const unique: string = mysolution(input)
  console.log({ input, return: unique })
}
