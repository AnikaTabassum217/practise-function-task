// Create a function that will return only the even numbers

function evenNumber(numbers) {
    let element = [];

    for (let number of numbers) {
        if (number % 2 === 0) {
            element.push(number)
        }
    }
    return element;
}

const array = [2, 5, 8, 3, 9, 12, 80];

const result = evenNumber(array)
console.log(result)