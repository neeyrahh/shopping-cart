let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'purple bag',
        tag:'purple bag',
        price:5000,
        incart:0
    },
    {
        name: 'black bag',
        tag:'black bag',
        price:5000,
        incart:0
    },
    {
        name:'red bag',
        tag:'red bag',
        price:5000,
        incart:0
    },
]






for (let i=0; i < carts.length; i ++) {
    carts[i] .addEventListener('click',() => {
    cartNumbers(products[i]);
    totalCost(products[i]);
     })
}
function onloadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers)
    document.querySelector('.cart span') .textContent = productNumbers;
}

function cartNumbers(products){
   
   let productNumbers = localStorage.getItem('cartNumbers');
   

   productNumbers = parseInt(productNumbers);
   if(productNumbers ){
       localStorage.setItem('cartNumbers', productNumbers + 1);
       document.querySelector('.cart span') .textContent = productNumbers + 1;
   }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span') .textContent =  1;
   }
   setItems(products)
   
}

function setItems(product) {
   let cartItems = localStorage.getItem('productIncart');
   cartitems = JSON.parse(cartItems);
  

   if(cartItems != null){

    if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
       cartItems[product.tag].inCart +=1;
   }else{
       product.inCart = 1;
       cartItems = {
           [product.tag]: product
       }
   }
    

   

    localStorage.setitem('productsIncart', JSON.stringify
    (cartItems));
}
function totalCost(product) {
    let carCost=localStorage.getItem('totalCost');
    console.log ('My cartcost',cartCost);
    console.log (typeof cartCost);

    if(cartcost !=null){
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
      }else {
    localStorage.setItems('totalCost',product.price); }
}

onloadCartNumbers();