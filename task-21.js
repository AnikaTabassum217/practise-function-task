// find Bigger number between three numbers

const a=10;
const b=15;
const c=20;



function bigger(number1,number2,number3){
console.log(number1,number2,number3)
if(a>b && a>c){
    const output=a;
    return output
}
else if(b>c && b>a){
    const output=b;
    return output
}
else {
    const output=c;
    return output
}
}

const result=bigger(a,b,a)
console.log(result,'is big number')