// Simple calculator to call function inside a function

function add(num1,num2){
     const result = num1+num2;
     return result;
}

function substraction(num1,num2){
    const result = num1-num2;
     return result;
}

function multiplication(num1,num2){
    const result = num1*num2;
    return result;
}

function division(num1,num2){
    const result = num1/num2;
    return result;
}

function calculator(a,b,operation){

         if(operation ==='add'){
            const output=add(a,b)
             return output;
         }

         if(operation ==='substraction'){
            const output=substraction(a,b)
            return output
         }

         if(operation ==='multiplication'){
            const output=multiplication(a,b)
            return output
         }

         if(operation ==='division'){
            const output=division(a,b)
            return output
         }
}

const finalResult=calculator(10,2,'add')
console.log(finalResult)