export const cart = [{
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    quant:1},
    {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    quant:2}
];


export function addToCart(prodDetails, bttnEle) {                //going to get this using modules
    const index = cart.findIndex(item => item.productId === prodDetails);

    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({ productId: prodDetails, quantity: 1 });
        bttnEle.innerHTML = "Added";
        bttnEle.classList.add('added');
    }
    document.querySelector('.cart-quantity').innerHTML = cart.length;
}