// Write a function called odd_even() which takes an integer value and tells whether
//  this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
// console.log(num)
if(num%2 != 0){
    const oddOrEven='Odd'
    return oddOrEven;
}
else{
    const oddOrEven='Even';
    return oddOrEven
}
}
const number=1000000;
const result=odd_even(number)
console.log(result)


