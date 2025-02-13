// Write a function to give the sum of all numbers in an array

// My corrected code

function sumOfArray(numbers){
    console.log(numbers)
    let sum=0;
    for(let i=0; i<numbers.length;i++){
      console.log(numbers[i])
      sum=sum+numbers[i];
    }
    return sum;
  }
  
  let result=sumOfArray(([12,2,7,8,5]));
  console.log(result)
  
  // Programming Hero code
  
  // stpe 1:declare a function
  // step 2:call check whether the function is called properly
  // step 3:set a parameter(s)
  // step 4: pas the parameter(s), check whether parameter is passed in a proper format
  // step 5: do the function tasks(step by step)
  
  function sumOfNumbers(numbers) {
      console.log(numbers);
  
      let totalSum = 0;
      for (let number of numbers) {
          totalSum = totalSum + number;
      }
      return totalSum;
  }
  
  const numbs = [2, 4, 7, 9, 1];
  const resultOfSum = sumOfNumbers(numbs)
  console.log(resultOfSum)