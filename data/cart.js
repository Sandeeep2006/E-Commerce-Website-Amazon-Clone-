export let cart = [{
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    quant:1},
    {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    quant:1}
];


export function addToCart(prodDetails) {                //going to get this using modules
    const index = cart.findIndex(item => item.id === prodDetails);

    if (index !== -1) {
        cart[index].quant+= 1;
    } else {
        cart.push({ id: prodDetails, quant: 1 });
    }
    document.querySelector('.cart-quantity').innerHTML = cart.length;
}

export function removeFromCart(productID){
    let newCart=[];
    cart.forEach((item)=>{
        if (item.id!==productID){
            newCart.push(item);
        }
    })
    cart=newCart;
}