// Calculate the average of the odd numbers in an array

function averageOddNumber(arrayNumbers) {

    // console.log(arrayNumbers)
    let sum = 0;
    let average = 0;
    let count=0;

    for (number of arrayNumbers) {
        // console.log(number)

        if (number % 2 !== 0) {
            const oddNumber = number;
            count++;
            sum = sum + oddNumber
        }
    }
    average=sum/count;
    console.log('Count is : ',count)
    console.log(sum)
    // console.log(average)
    return average;
}

const array = [1, 4, 3, 8, 5, 13]
const result = averageOddNumber(array)
console.log(result)