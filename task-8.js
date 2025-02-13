
// Return the sum of even numbers

function subOfEvenNumbers(numbers){
    // console.log(numbers)
    
    let sum=0;
      for(let i=0; i<numbers.length;i++){
        // console.log(numbers[i])
        if(numbers[i]%2===0)
          sum=sum+numbers[i]
      }
      return sum;
    }
      
    const arrayNumbers=[2,4,7,6,13]
    
    const result=subOfEvenNumbers(arrayNumbers);
    console.log(result);