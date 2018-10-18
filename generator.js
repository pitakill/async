function *NaturalNumbers() {
  let number = 1
  while (true) {
    yield number
    number++
  }
}

const numbers = NaturalNumbers()

console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())

function *GeneratorHolaMundo() {
  yield "hola"
  yield "mundo"
}

const holamundoIterator = GeneratorHolaMundo()

while (true) {
  const {value, done} = holamundoIterator.next()
  if (done) return
  console.log(value)
}
