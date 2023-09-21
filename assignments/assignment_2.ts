function encoding(compress: string): string {
  let result: string = ''
  let oldChar: string = ''
  let chars: string[] = compress.toUpperCase().split('')
  let count: number = 0
  let lastChar: string = ''
  for (const char of chars) {
    if (oldChar === '') {
      oldChar = char
    } else if (char !== oldChar) {
      result += `${count}${oldChar}`
      oldChar = char
      count = 0
    }
    lastChar = char
    count++
  }
  result += `${count}${lastChar}`
  return result
}
const compresses: string[] = ['HELLOOO', 'BWAAALAAA', 'ISEEABEEONMYKNEE']
for (const compress of compresses) {
  const decompresses: string = encoding(compress)
  console.log(`${compress} => ${decompresses}`)
}
