//  Find the min number in an array

function smallNumber(numbers){
    // console.log(numbers)
    let minNumber=numbers[0];
    for(number of numbers){
        // console.log(number)
       
       if(minNumber>number){
        minNumber=number
       }
    }
    return minNumber;

}
const array=[20,65,39,13,78,7];
const result=smallNumber(array)
 console.log(result)
