export const cart = [];


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