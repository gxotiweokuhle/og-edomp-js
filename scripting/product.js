let products = [
    {
        id:1,
        image:"https://i.postimg.cc/KjLFVxFG/1.jpg",
        itemname:"Jagger 2-Seater Couch",
        Desc:"The Jagger Couch boasts a bold contemporary design with a squared silhouette, making the design simple but striking.",
        price:"R 11 0000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:2,
        image:"https://i.postimg.cc/43dGGzZF/3.jpg",
        itemname:"Jagger 3-Seater Couch",
        Desc:"The Laurence 3 Seater Couch is a modern, comfortable and generously proportioned couch, complete with adjustable headrests.",
        price:"R 20 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:3,
        image:"https://i.postimg.cc/VN7bBF5m/jagger-modular-4-seater-couch-night-sky.jpg",
        itemname:"Jagger 4-Seater Couch",
        Desc:"The Jagger Leather Modular 4 Seater Couch boasts a bold contemporary design with a square-like silhouette, keeping the design simple but striking.",
        price:"R 30 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:5,
        image:"https://i.postimg.cc/pTZWN7VN/montreal-jude-4-seater-dining-set-12m-vintage-brown.jpg",
        itemname:"Montreal  4 Seater ",
        Desc:"The Montreal Jude 4 Seater Dining Set combines warm natural tones and a modern aesthetic in a comfortable and pleasing dining combination.",
        price: "R 11 000",
        category:"Kitchen Collection",
        quantity: "5",
    },
    {
        id:6,
        image:"https://i.postimg.cc/WzFC8SnZ/vancouver-halo-8-seater-dining-set-24m-camel.jpg",
        itemname:"Vancouver 8 Seater",
        Desc:"This dining set will infuse your dining room with a relaxed contemporary class and a touch of vintage inspiration.",
        price:"R 30 000",
        category:"Kitchen Collection",
        quantity: "5",
    },
    {
        id:7,
        image:"https://i.postimg.cc/d1vsxvYm/bordeaux-emma-8-seater-dining-set-27m.jpg",
        itemname:"Bordeaux 8 Seater",
        Desc:"This dignified dining set combines the elegant craftsmanship of the Bordeaux Dining Table and the stylish Emma Dining Chair.",
        price:"R 62 000",
        category:"Kitchen Collection",
        quantity: "5",
    },
    {
        id:8,
        image:"https://i.postimg.cc/xd421c1j/clayden-tv-stand-1.jpg",
        itemname:"Clayden TV Stand",
        Desc:"Kick back in style with the beautiful Clayden TV Stand. The homely finish applied to the Clayden's Acacia wood frame fills your space with aesthetic warmth, just what you need for a stylish movie night!",
        price:"R 9 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:9,
        image:"https://i.postimg.cc/KcL2mcSF/peyton-acacia-wood-tv-cabinet-3.jpg",
        itemname:"Acacia TV Stand",
        Desc:"Turn on some serious style in your living room with this 2m Acacia Wood TV stand. A practical and robust solid wood design in warm neutral tones makes this a stunning choice",
        price:"R 12 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:10,
        image:"https://i.postimg.cc/bJNW4qz1/ashford-tv-stand-large.jpg",
        itemname:"Carlisile TV Stand",
        Desc:"The Acacia wood Carlisle TV stand has a beautifully classic touch to it, making a statement with vintage sophistication.",
        price:"R 8 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:11,
        image:"https://i.postimg.cc/Vk4w27yC/bella-dual-function-bed-single-alaska-grey-2.jpg",
        itemname:"Bella Kid Bed",
        Desc:"The Bella Dual Function kids bed is a stylishly upholstered bed base seamlessly pulls out into a functional dual-purpose transition bed.",
        price:"R 8 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
    {
        id:12,
        image:"https://i.postimg.cc/65VBbqHy/bella-dual-function-bed-queen-alaska-grey.jpg",
        itemname:"Bella Dual Bed",
        Desc:"The Bella Dual Function Bed introduces an elegant and versatile answer to space-friendly bedroom style. Comfort and style combine in this classy bed base and headboard combination.",
        price:"R 12 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
    {
        id:13,
        image:"https://i.postimg.cc/Hx4Vx45Q/bella-dual-function-bed-double-vintage-pink.jpg",
        itemname:"Bella Dual Bed",
        Desc:"The Bella Dual Function Bed introduces an elegant and versatile answer to space-friendly bedroom style. Comfort and style combine in this classy bed base and headboard combination.",
        price:"R 12 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
    {
        id:14,
        image:"https://i.postimg.cc/15HbzfWx/waldorf-chest-of-drawers-2.jpg",
        itemname:"Catalan Chest Drawer",
        Desc:"This five drawer chest of drawers combines wire brushed Acacia wood and powder coated steel legs to present a warm yet modern bedroom piece.",
        price:"R 8 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
    {
        id:15,
        image:"https://i.postimg.cc/XJj5cNMC/vancouver-acacia-wood-chest-of-drawers.jpg",
        itemname:"Vancouver Chest Drawer",
        Desc:"The Vancouver chest of drawers combines the robust good looks of solid wood with a calming contemporary design to add a sense of warmth to any modern bedroom.",
        price:"R 11 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
    {
        id:16,
        image:"https://i.postimg.cc/43vWcFk3/peyton-acacia-wood-pedestal.jpg",
        itemname:"Acacia Chest Drawer",
        Desc:"The Vancouver chest of drawers combines the robust good looks of solid wood with a calming contemporary design to add a sense of warmth to any modern bedroom.",
        price:"R 5 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
];
function appear(event){
}
let featureGroup = document.querySelector(".allproducts");
products.forEach((product, id) => {
  featureGroup.innerHTML += `

    <div class="col-lg-4 col-md-4 col-12 justify-content-center" id="card-head">
            <div class="featured-item">
            <div class="product-img">
               <a href="#">
                  <img src="${product.image}" alt="Images" style="width: 300px">
               </a>
            </div>
                <div class="product-name">
               <h3><a href="#">${product.itemname}</a></h3>
               <hr>
               <div class="product-price">
                  <h4 class="price">${product.price}</h4>
                  <span>(4.9)<i class="fa fa-star"></i></span>
               </div>
               <hr>
               <div class="product-btn">
                  <button type="button" data-name="Oxford" data-price="1200"  data-id="${product.id}" class="add-to-cart border-radius-5" onclick="addToCart(${id})"> Add to cart</button>
               </div>
    </div>
  `
});

let cart = JSON.parse(window.localStorage.getItem("Products")) || [];//add to second local storage


function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  window.localStorage.setItem("Items", JSON.stringify(cart))
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}

function updateCart() {
    const cartContainer = document.getElementById("cart-body");
    localStorage.setItem("Items", JSON.stringify(cart))
    cartContainer.innerHTML = "";
    cart.forEach((product, index) => {
        const cartItem = document.createElement("div")
        cartItem.innerHTML = `<span>${product.itemname}</span>
        <span>${product.price}</span>
        <input id="inputFeet" type="number" placeholder="1"
        oninput="lengthConverter(this.value)" onchange="lengthConverter(this.value)" min="1" width="50px" height="40px"></p>
        <p>Total $ <span id="results"></span></p>
        <button onclick="removeFromCart(${index})" id="rembutton">✖</button>
        `
        cartContainer.appendChild(cartItem)
    });
}
    function calculateTotal() {
    let totalElement = document.getElementById("total");
    let total = cart.reduce((acc, product) => {
      return acc + parseInt(product.price.replace("R", ""));
    }, 0);
    totalElement.textContent = `R${total.toFixed(2)}`;
  }

function loadItems() {
  let loadProducts = localStorage.getItem("Products");
  if (loadProducts) {
    cart = JSON.parse(loadProducts);
    updateCart();
  }
}

window.addEventListener("load", function () {
  loadItems();
});
displayProducts();
