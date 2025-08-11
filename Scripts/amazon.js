// Key ideas of javascript
// --> Save the data of your website
// -->Generate the HTML
// -->Make it interactive

console.log("Hello");

// const products =[{
//     imageSrc:"images/products/athletic-cotton-socks-6-pairs.jpg",
//     name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating:{ stars: 4.5, count :87},
//     priceCents:1090
// },{
//     imageSrc:"images/products/intermediate-composite-basketball.jpg",
//     name:"Intermediate Size Basketball",
//     rating:{ stars: 4, count :127},
//     priceCents:2095
// },{
//     imageSrc:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name:"Adults Plain Cotton T-Shirt - 2 Pack",
//     rating:{ stars: 4.5, count :56},
//     priceCents:799
// },{         //adding another item
//   imageSrc:"images/products/black-2-slot-toaster.jpg",
//   name:"2 Slot Toaster - Black",
//   rating:{stars:5,count:2197},
//   priceCents:1899
// },{
//   imageSrc:"images/products/6-piece-white-dinner-plate-set.jpg",
//   name:"6 Piece White Dinner Plate Set",
//   rating:{stars:4,count:37},
//   priceCents:2067
// }]

let accumulator="";

products.forEach((things)=>{
    const html=`
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src=${things.image}>
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${things.name} 
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${things.rating.stars *10}.png">
          <div class="product-rating-count link-primary">
            ${things.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(things.priceCents/100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary">
          Add to Cart
        </button>
      </div>
    `
    accumulator+=html;
    console.log(html)
})

console.log(accumulator);

document.querySelector('.js-product-grid').innerHTML=accumulator;