export const division = (a, b, fn) => {
  if (b == 0) return fn(`El dividendo no puede ser: ${b}`)
  fn(null, a / b)
}
