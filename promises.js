const division = (a, b) => new Promise((resolve, reject) => {
  if (b == 0) reject(`El dividendo tiene que ser un número distinto de 0, tiene el valor: ${b}`)
  resolve(a / b)
})

division(1,2).then(console.log).catch(console.error)
division(1,0).then(console.log).catch(console.error)
