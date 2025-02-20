/*
Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

function longestWord(string) {

    const splitString = string.split(' ');
    let longestLength = 1;

    for (let str of splitString) {
        if (str.length > longestLength) {
            longestLength = str.length;
        }
    }
    // console.log(longestLength)
}

const string = 'I am learning Programming to become a programmer'
const result = longestWord(string)

function loop(numbers){
// console.log(numbers)
for(let i=0; i<numbers.length; i++){
    console.log('Index ',i,'=',numbers[i])
    // console.log(numbers[i])
}
}
const numbers=[8,10,3,22,5]
loop(numbers)
