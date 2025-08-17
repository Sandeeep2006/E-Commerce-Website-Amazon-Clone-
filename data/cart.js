export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [{
            id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
            quant: 1,
            deliveryOptionId: 1
        },
        {
            id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
            quant: 1,
            deliveryOptionId: 2
        }
        ];
    }
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(prodId) {                //going to get this using modules
    let matchingItem;
    cart.forEach((cartItem) => {
        if (prodId === cartItem.id) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quant += 1;
    } else {
        cart.push({
            id: prodId,
            quant: 1,
            deliveryOptionId: 1
        });
    }

    saveToStorage();
}

export function removeFromCart(productID) {
    const newCart = [];
    cart.forEach((item) => {
        if (item.id !== productID) {
            newCart.push(item);
        }
    });
    cart = newCart;

    saveToStorage();
}

export function updateDeliveryOption(proID, optionID) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.id === proID)
            matchingItem = cartItem;
    });
    matchingItem.deliveryOptionId = optionID;
    saveToStorage();
}