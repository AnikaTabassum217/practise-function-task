// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.


function oddOrEven(digit){
//   console.log(digit)
  if(digit%2 != 0){
    const result1=digit*2;
    return result1
  }
  else{
    const result2=digit/2;
    return result2
  }
}

const number=16;
const oddOrEvenNumber=oddOrEven(number)
console.log(oddOrEvenNumber)


