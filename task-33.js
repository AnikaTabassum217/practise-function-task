/*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

Write a JavaScript function named calculateElectronicsBudget that takes in the number of 
laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptop,tablet,mobile){
// console.log(laptop,tablet,mobile)

  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalLaptopPrice = laptop*laptopPrice ;
  const totalTabletPrice = tablet*tabletPrice ;
  const totalMobilePrice = mobile*mobilePrice ;
  

  const totalPrice = (totalLaptopPrice + totalTabletPrice + totalMobilePrice);
  return totalPrice

}


const laptopQuantity= 2;
const tabletQuantity= 3;
const mobileQuantity= 4;

const result = calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity)
 console.log(result)
