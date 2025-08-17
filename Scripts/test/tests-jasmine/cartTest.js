import { loadFromStorage, addToCart, cart } from "../../../data/cart.js";

// NOT WORKING 16:35:00-16:50:00, - 17:36:00


describe("Checking cart functionality:", () => {
    it("Add Existing product to the cart", () => {

    });

    it("Add new product to the cart", () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        console.log(localStorage.getItem('cart'));
        loadFromStorage();
        addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    })
});