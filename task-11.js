// Calculate the average of the odd numbers in an array.
//  Another way which is seen from Programming Hero.

function averageOddNumber(numbers) {
    console.log(numbers)

    let odd = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odd.push(number);
        }
    }
    console.log(odd)

    let sum = 0;
    let avg = 0;
    for (const number of odd) {
        // console.log(number)
        sum = sum + number;
    }
    avg = sum / (odd.length)
    return avg;
}

const array = [13, 0, 3, 1, 2, 9, 4, 0]
const result = averageOddNumber(array)
console.log(result)