// creating object cart , to create multiple copies of it 

function Cart(localStorageVariable){    //function to create cart objects
    const cart = {
    cartItems: undefined,

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(`${localStorageVariable}`));
        if (!this.cartItems) {
            this.cartItems = [{
                id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
                quant: 1,
                deliveryOptionId: 1
            },
            {
                id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
                quant: 1,
                deliveryOptionId: 2
            }];
        }
    },

    saveToStorage() {
        localStorage.setItem(`${localStorageVariable}`, JSON.stringify(this.cartItems));
    },

    addToCart(prodId) {                //going to get this using modules
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (prodId === cartItem.id) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quant += 1;
        } else {
            this.cartItems.push({
                id: prodId,
                quant: 1,
                deliveryOptionId: 1
            });
        }

        this.saveToStorage();
    },

    removeFromCart(productID) {
        const newCart = [];
        this.cartItems.forEach((item) => {
            if (item.id !== productID) {
                newCart.push(item);
            }
        });
        this.cartItems = newCart;

        this.saveToStorage();
    },

    updateDeliveryOption(proID, optionID) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (cartItem.id === proID)
                matchingItem = cartItem;
        });
        matchingItem.deliveryOptionId = optionID;
        this.saveToStorage();
    }
    };
    return cart;
}


const cart=Cart("main-cart");
cart.loadFromStorage();
cart.addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');
console.log(cart);

//another cart

const businessCart=Cart("business-cart");
businessCart.loadFromStorage();
console.log(businessCart);