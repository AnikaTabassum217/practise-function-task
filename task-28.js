/*Discounted Price: 

Ticket Price is 100. If you buy 100 ticket. No discount.

If you buy more than 100 and ups to 200, ticket price is 90 tk. 10 tk discount for per ticket.
Overall discount for that quantity. 

If you buy more than 200 ticket, ticket price is 70 tk. 300 tk discount for per ticket. 
Overall discount for that quantity. 
*/

function discountedPrice(quantity){
    // console.log(quantity)
    let totalprice=0;

    if(quantity <= 100){
         totalprice = (quantity * 100)
    }
    else if(quantity <= 200){
        totalprice = (quantity * 90)
    }
    else{
        totalprice = (quantity * 70)
    }
    return totalprice
}

const quantity=200;
const result = discountedPrice(quantity)
console.log(result)