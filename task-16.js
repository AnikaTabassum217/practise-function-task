// Write a function to convert temperature from Celsius to Fahrenheit.

// function celsiusToFahrenheit(temp){
// //   console.log(temp)
//  const fahrenheit = (temp*(9/5))+32;
//  return fahrenheit

// }

// const temperature=20;
// const result = celsiusToFahrenheit(temperature)
// console.log(result,"F")

const a  = [1, 2, 3, 4, 5, 2, 6,2];
let dupli = [];
let count=0;
for (let i in a) {
    // console.log('index',i,'=',a[i])
    for (let j in a) {
        if (i !== j && a[i] === a[j]) {
            console.log(j,a[j])
            dupli.push(a[i]);
            count=count+1
           
        }
    }
   
}
console.log('count',count)
// console.log(dupli); 
