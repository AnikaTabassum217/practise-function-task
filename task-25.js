/* Use add and multiplication to calculate wood requirements

chair= 3 cft;
table = 10 cft;
bed = 50 cft; 
*/

function wooCalculate(chairQuantity, tableQuantity, bedQuantity){

    const  perChairOfWood = 3;
    const  perTableOfWood = 10;
    const  perBedOfWood = 50;

    const totalChairOfWood = (chairQuantity*perChairOfWood);
    const totalTableOfWood = (tableQuantity*perTableOfWood);
    const totalBedOfWood = (bedQuantity*perBedOfWood);

    const totalCost = (totalChairOfWood+totalTableOfWood+totalBedOfWood);
    return totalCost
  
}

const totalWood=wooCalculate(0,0,2);
console.log(totalWood)