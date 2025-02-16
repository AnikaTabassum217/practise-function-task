/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function smallestNumber(arrayString){
// console.log(arrayString)
let smallestString= arrayString[0];
// console.log(smallestString)
  for(const string of arrayString){
    // console.log(string)
    if(smallestString.length > string.length){
        smallestString=string;
    }
  }
  return smallestString
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result=smallestNumber(heights2);
console.log(result)