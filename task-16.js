// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(temp){
//   console.log(temp)
 const fahrenheit = (temp*(9/5))+32;
 return fahrenheit

}

const temperature=20;
const result = celsiusToFahrenheit(temperature)
console.log(result,"F")

