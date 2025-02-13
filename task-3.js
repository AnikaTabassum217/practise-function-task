// Write a function called make_avg() which will take an array of integers and the size 
// of that array and return the average of those values.


function make_avg(arr) {
    // console.log(arr);
    const length = arr.length;

    let sum = 0;
    let average = 0;
    for (let i = 0; i < length; i++) {
        // console.log(arr[i])
        sum = sum + arr[i]; 
    }
    average = sum / length;
    return average
}

const array = [2, 3, 5, 10]
const result = make_avg(array);
console.log(result)