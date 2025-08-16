import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { products } from '../data/products.js';
import { format } from './Utils/currencyformatter.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';  //ESM import , default import (no curly braces;when need to import only 1 thing present in the file)
import { deliveryOptions } from "./Utils/deliveryOptions.js";


function renderOrderSummary(){
  let accumulator = "";
  cart.forEach((cartItem) => {
    const prodId = cartItem.id;
    let productItem;
    products.forEach((item) => {
      if (item.id === prodId) {
        productItem = item;
      }
    })

    //Date heading change
    const nowId = cartItem.deliveryOptionId;
    let finalOption;
    deliveryOptions.forEach((dOp) => {
      if (dOp.id == nowId)
        finalOption = dOp;
    })
    const today = dayjs();
    const deliveryDate = today.add(finalOption.deliveryDays, 'day');
    const dateString = deliveryDate.format('dddd , MMMM D');

    accumulator += `
      <div class="cart-item-container js-cart-item-container-${productItem.id}">
              <div class="delivery-date">
                Delivery date: ${dateString}
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
                    <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${productItem.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${generateDeliveryHTML(productItem, cartItem)}
                </div>
              </div>
            </div>
      `;
  });
  document.querySelector('.js-order-summary').innerHTML = accumulator;



  document.querySelectorAll('.js-delete-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      // console.log(cart);
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      console.log(container);
      container.remove();
    })
  });


  function generateDeliveryHTML(productItem, cartItem) {
    let accumulator = '';

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
      const dateString = deliveryDate.format('dddd , MMMM D');

      const priceString = (deliveryOption.priceCents === 0) ? "FREE " : `$${format(deliveryOption.priceCents)} - `

      const isChecked = deliveryOption.id == cartItem.deliveryOptionId;

      accumulator += `
      <div class="delivery-option js-update-delivery"
      data-pro-id="${productItem.id}" data-delivery-option="${deliveryOption.id}">
        <input type="radio"
        ${isChecked ? "checked" : ""}
          class="delivery-option-input"
          name="${productItem.id}-delivery-option">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${priceString}  Shipping
          </div>
        </div>
      </div>
    `
    })
    return accumulator;
  }

  document.querySelectorAll('.js-update-delivery').forEach((element) => {
    element.addEventListener('click', () => {
      const proId = element.dataset.proId;
      const deliId = element.dataset.deliveryOption;
      updateDeliveryOption(proId, deliId);
      renderOrderSummary();                   //updating the data and then rendering the whole page again.
    })
  });
}

renderOrderSummary();