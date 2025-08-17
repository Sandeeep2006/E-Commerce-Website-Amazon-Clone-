import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { products } from "../../data/products.js";
import { format } from "../Utils/currencyformatter.js";

export function renderPaymentSummary(){
    let goodsCost=0,deliveryCost=0;
    cart.forEach((cartItem)=>{
        products.forEach((productItem)=>{
            if (cartItem.id===productItem.id)
            goodsCost+=productItem.priceCents *cartItem.quant;
        });

        deliveryOptions.forEach((deliveryItems)=>{
            if (deliveryItems.id==cartItem.deliveryOptionId)
            deliveryCost+=deliveryItems.priceCents; 
        })
    });
    const result=goodsCost+deliveryCost;
    const Tax=result * 0.18;
    const finalAfterTax=result+Tax;



    const paymentHTML=`
        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (${cart.length}):</div>
          <div class="payment-summary-money">$${format(goodsCost)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$${format(deliveryCost)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${format(result)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${format(Tax)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${format(finalAfterTax)}</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML=paymentHTML;
}