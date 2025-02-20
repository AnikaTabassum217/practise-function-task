/* Write a function to count the number of vowels in a string. */

function hasVowel(string) {
    //   console.log(string.length)
    let count=0;
    for (const str of string) {
        // console.log(str)

        if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' ||
            str === 'A' || str === 'E' || str === 'I' || str === 'O' || str === 'U'){
            count=count+1;
        }
    }
   return count
}
const string = 'anika'
const result = hasVowel(string)
console.log(result);
