//  Find the max number in an array

function bigNumber(numbers){
    // console.log(numbers)

    let maxNumber=numbers[0]
    // console.log(maxNumber);
    for(let i=0; i<numbers.length; i++){
        // console.log(i,'=',numbers[i])
        if(maxNumber < numbers[i]){
            maxNumber = numbers[i]
        }
    }
    return maxNumber
}

const array=[20,65,39,13,100,78,79];
const result=bigNumber(array);
console.log(result)
