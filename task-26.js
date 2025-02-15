// Find the cheapest phone from an array of phone objects

function cheapestPhone(phoneNumbers){
// console.log(phoneNumbers)
   
  let minPrice= phoneNumbers[0];
//   console.log(minPrice)
  for(const number of phoneNumbers){
    // console.log(number)
    if(minPrice.price>number.price){
        minPrice=number
    }
  }
  return minPrice;
}

const phones=[
    { name:"Samsung",price:12000,color:'velvet'},
    { name:"HTC",price:14000,color:'velvet'},
    { name:"Iphone",price:20000,color:'velvet'},
    { name:"Nokia",price:16000,color:'velvet'},
    { name:"Motorola",price:19000,color:'velvet'}
]
const result=cheapestPhone(phones)
console.log('cheapest phone is',result);
