/* Generate a random number between 10 to 20 */


function generateRandom(min,max){
    /*
    Math.random() -> Gives a random decimal between 0 and 1
    If min = 10 and max = 20, then max - min + 1 = 11, so the result is between 0 and 11.
    min -> Shifts the number into the desired range (10 to 20).If 7 is the result, then 7 + 10 = 17.
    */

  let random =  Math.floor(Math.random() * (max - min + 1)) + min;
  return random
}

const min=10;
const max=20;
const result=generateRandom(min,max);
console.log(result);


