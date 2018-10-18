import {division} from './operations'

//const division = (a, b) => new Promise((resolve, reject) => {
  //if (b == 0) reject(`El dividendo tiene que ser un número distinto de 0, tiene el valor: ${b}`)
  //resolve(a / b)
//})


const divisionPromisified = (a,b) => new Promise((resolve, reject) => {
  division(a, b, (error, data) => {
    if (error) reject(error)
    resolve(data)
  })
})

const getNumber = () => 10000

async function pintar() {
  try {
    const response = await divisionPromisified(1,2)
    const number = await getNumber()
    const suma = response + number
    console.log(suma)
  } catch (e) {
    console.error("Tuvimos un error: ", e)
  }
}

pintar()

//division(1,0).then(console.log).catch(console.error)
