//Integration Testing - checking multiple units of code together

import { renderOrderSummary } from "../../Scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart";

describe("Test suite: REnder Order Summary",()=>{
    it("Displays the cart",()=>{
        document.querySelector('.js-test-container').innerHTML=
        `<div class=".js-order-summary"></div>`;

        spyOn(localStorage,'getItem').and,callFake(()=>{
            return JSON.stringify([{
            id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
            quant: 1,
            deliveryOptionId: 1
        },
        {
            id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
            quant: 1,
            deliveryOptionId: 2
        }
        ]);
        });
        loadFromStorage();
        renderOrderSummary();
    });
});