
// Calculate the total cost of the products in a shopping cart

function shoppingCart(products){
// console.log(products)


let totalPrice=0;

  for(const product of products){
    console.log(product)
    totalPrice= totalPrice + (product.price * product.quantity);
  }
  return totalPrice;
}

const products=[
    {name:'shampoo',price:500, quantity:2  },
    {name:'dress',price:4000,quantity:2 },
    {name:'shoe',price:3000, quantity:1},
    {name:'bag',price:2000,quantity:3 }
]

const result=shoppingCart(products)
console.log(result)

