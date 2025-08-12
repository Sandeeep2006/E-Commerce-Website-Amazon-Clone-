import { cart } from "../data/cart.js";
import {products} from '../data/products.js';
import {format} from './Utils/currencyformatter.js'

let accumulator="";
cart.forEach((cartItem)=>{
    const prodId=cartItem.id;
    let productItem;
    products.forEach((item=>{
        if (item.id===cartItem.id)
        productItem=item;
    } ))
    console.log(productItem);

    const html=`
    <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${productItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${productItem.name}
                </div>
                <div class="product-price">
                  $${format(productItem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quant}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="${productItem.id}-delivery-option">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="${productItem.id}-delivery-option">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="${productItem.id}-delivery-option">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
    accumulator+=html;
})
document.querySelector('.js-order-summary').innerHTML=accumulator;