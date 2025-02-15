/* Layer Discout Price

For 1st 100 ticket there is no discount.

If you buy more than 100, then first 100 price is 100. remaining ticket price is 90 tk.

If you buy more than 200, then first 100 price is 100. For Second 100 ticket price is 90 tk. 
For remaining ticket price is 70 tk. 
*/



function layerDiscount(quantity){
    // console.log(quantity)

    const first100Price = 100;
    const second200Price = 90;
    const avobe200Price =70;

    let totalprice=0;

    if(quantity <= 100){
         totalprice = (quantity * first100Price)
    }
    else if(quantity <= 200){
       const first100Total = (100*first100Price);
       const remainingQuantity= quantity - 100;
       const remainingTotal=(remainingQuantity * second200Price)
        totalprice = first100Total+remainingTotal
    }
    else {
        const first100Total = (100*first100Price);
        const second100Total =(100*second200Price);
        const remainingQuantity = (quantity-200);
        const remainingTotal = (remainingQuantity*avobe200Price) ;
        totalprice = (first100Total+second100Total+remainingTotal);
        
    }

    return totalprice;

}

const quantity=150;
const result = layerDiscount(quantity);
console.log(result)
