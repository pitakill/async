function *NaturalNumbers() {
  let number = 1
  while (true) {
    yield number
    number++
  }
}

const numbers = NaturalNumbers()

console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
