/*
You are given an array of phone objects, each containing information about the model, 
brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice 
that takes this array as input and returns the average price of phone.

Input:

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/    

function findAveragePhonePrice(phones){
// console.log(phones);

 let sum=0;
 let average=0;
 let length=0;
 
for(const phone of phones){
    // console.log(phone.price)
    sum = (sum+phone.price);
    length = phones.length
    
}
average = sum/length ;
return average;
  
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const result = findAveragePhonePrice(phones)
console.log(result)
