/*
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

function lowestNumber(arrayNumbers){
    // console.log(arrayNumbers)

    let lowNumber = arrayNumbers[0];

    for( const number of arrayNumbers){
        // console.log(number)
        if(lowNumber > number){
            lowNumber=number
        }
    }
    return lowNumber;

}

const heights2 = [167, 190, 120, 165, 137];
const result = lowestNumber(heights2);
console.log(result);