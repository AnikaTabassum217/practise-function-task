// Write a function called count_zero() which will take a binary string 
// (Binary string is a string which is consist of only 0 and 1) as parameter
//  and count how many 0’s are there in that string.


function count_zero(binary) {

    const binarySplit = binary.split("");
    console.log(binarySplit);
     let count = 0;
    for (let i = 0; i < binarySplit.length; i++) {
       if(binarySplit[i]==0){
        count++
       }
    }
    return count;
}

const number = '101010110';

const result = count_zero(number)
console.log(result)

