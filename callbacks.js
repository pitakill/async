// Callback síncrono
const division = (a, b, fn) => {
  if (b == 0) return fn(`El dividendo no puede ser: ${b}`)
  fn(null, a / b)
}

const callback = (error, data) => {
  if (error) return console.error(error)
  console.log(data)
}

//division(1,3, callback)
//division(2, 0, callback)
//division(23, "0", callback)
//division(23, false, callback)

// callback asíncrono
const random = max => Math.floor(Math.random() * Math.floor(max))
const callbackAsync = (error, data) => {
  setTimeout(callback, random(10) * 1000, error, data)
}

//division(1,3, callbackAsync)
//division(2, 0, callbackAsync)
//division(23, "0", callbackAsync)
//division(23, false, callbackAsync)

const multiplicacion = (a, b, fn) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return fn('Alguno de los multiplicandos no es un número')
  fn (null, a * b)
}

multiplicacion(3,5, (error, data) => {
  if (error) return console.error(error)
  division(data, 4, (error, data) => {
    if (error) return console.error(error)
      multiplicacion(data, 32, (error, data) => {
        if (error) return console.error(error)
          division(7, data, callback)
      })
  })
})
