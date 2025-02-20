/*
Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

function longestWord(string) {

    const splitString = string.split(' ');
    let longestLength=1;
     let largestWord =''
    let splitStr;
    for(splitStr of splitString){
        if(splitStr.length>longestLength){   /*check length*/
             longestLength = splitStr.length /*assign length*/
             largestWord=splitStr; /*assign string*/
            
        }
    }
    //    console.log(largestWord,longestLength)
     return {largestWord,longestLength}
}

const string = 'I am learning Programming to become a programmer'
const result = longestWord(string)
console.log(result)

