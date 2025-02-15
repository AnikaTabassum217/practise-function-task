// for(let i=0;i<arrayNumbers.length;i++){
//     // console.log(arrayNumbers[i])
//     if(number===arrayNumbers[i]){
//         count= count+1;
//     }
//   }

/*You are given an array of numbers. Count how many times the a number is repeated 
in the array.
sample-input: numbers = [5,6,11,12,98, 5]

find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]

find: 25
output: 0 */

function repeatedNumber(arrayNumbers){
//  console.log(arrayNumbers)
  
  let count=0;
  let newArray=[];
//   newArray=arrayNumbers;
//   console.log(newArray) ;

  for( let i=0; i<arrayNumbers.length;i++){
     console.log(i,'=',arrayNumbers[i])
  }
  return count 
}

const numbers = [5,6,11,12,98, 5];
const result=repeatedNumber(numbers)