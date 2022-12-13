//Kelvin Weather convertor no function
//constant temp in kelvin
let kelvin = 293
//converts kelvin to celsius
let celsius = kelvin - 273
//converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32
//rounding down to a whole number
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)