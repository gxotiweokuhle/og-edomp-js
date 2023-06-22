
let products = [
    {
        id:1,
        image:"https://i.postimg.cc/KjLFVxFG/1.jpg",
        itemname:"Jagger 2-Seater Couch",
        price:"R 11 000",
        category:"Lounge Collection",
        quantity: "15",
    },
    {
        id:2,
        image:"https://i.postimg.cc/43dGGzZF/3.jpg",
        itemname:"Jagger 3-Seater Couch",
        price:"R 20 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:3,
        image:"https://i.postimg.cc/VN7bBF5m/jagger-modular-4-seater-couch-night-sky.jpg",
        itemname:"Jagger 4-Seater Couch",
        price:"R 30 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:5,
        image:"https://i.postimg.cc/pTZWN7VN/montreal-jude-4-seater-dining-set-12m-vintage-brown.jpg",
        itemname:"Montreal  4 Seater ",
        price: "R 11 000",
        category:"Kitchen Collection",
        quantity: "5",
    },
    {
        id:6,
        image:"https://i.postimg.cc/WzFC8SnZ/vancouver-halo-8-seater-dining-set-24m-camel.jpg",
        itemname:"Vancouver 8 Seater",
        price:"R 30 000",
        category:"Kitchen Collection",
        quantity: "5",
    },
    {
        id:7,
        image:"https://i.postimg.cc/d1vsxvYm/bordeaux-emma-8-seater-dining-set-27m.jpg",
        itemname:"Bordeaux 8 Seater",
        price:"R 62 000",
        category:"Kitchen Collection",
        quantity: "5",
    },
    {
        id:8,
        image:"https://i.postimg.cc/xd421c1j/clayden-tv-stand-1.jpg",
        itemname:"Clayden TV Stand",
        price:"R 9 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:9,
        image:"https://i.postimg.cc/KcL2mcSF/peyton-acacia-wood-tv-cabinet-3.jpg",
        itemname:"Acacia TV Stand",
        price:"R 12 000",
        category:"Lounge Collection",
        quantity: "5",
    },
    {
        id:10,
        image:"https://i.postimg.cc/bJNW4qz1/ashford-tv-stand-large.jpg",
        itemname:"Carlisile TV Stand",
        price:"R 8 000",
        category:"Lounge Collection",
        quantity: "5",
    },
   
    {
        id:11,
        image:"https://i.postimg.cc/15HbzfWx/waldorf-chest-of-drawers-2.jpg",
        itemname:"Catalan Chest Drawer",
        price:"R 8 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
    {
        id:12,
        image:"https://i.postimg.cc/XJj5cNMC/vancouver-acacia-wood-chest-of-drawers.jpg",
        itemname:"Vancouver Chest Drawer",
        price:"R 11 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
    {
        id:13,
        image:"https://i.postimg.cc/43vWcFk3/peyton-acacia-wood-pedestal.jpg",
        itemname:"Acacia Chest Drawer",
        price:"R 5 000",
        category:"Bedroom Collection",
        quantity: "5",
    },
];
function appear(category = ""){
let featureGroup = document.querySelector(".allproducts");
featureGroup.innerHTML = "";
products.forEach((product, id) => {
  if(category === "" || product.category === category) {
    featureGroup.innerHTML += `
    <div class="col-lg-4 col-md-4 col-12 justify-content-center" id="card-head">
            <div class="featured-item p-0">
            <div class="product-img">
               <a href="#">
                  <img src="${product.image}" alt="Images" style="width: 300px">
               </a>
            </div>
                <div class="product-name">
               <h3><p>${product.itemname}</p></h3>
               <hr>
               <div class="product-price">
                  <h4 class="price">${product.price}</h4>
                  <span>(4.9)<i class="fa fa-star"></i></span>
               </div>
               <hr>
               <div class="product-btn">
                  <button type="button" data-name="Oxford" data-price="1200"  data-id="${product.id}" class="btn btn-primary" onclick="addToCart(${id})"> Add to cart</button>
               </div>
    </div>
  `
  }
});
}
appear();

function filter() {
  let selectCategory = document.getElementById("categories");
  let selectedCategory = selectCategory.value;
  appear(selectedCategory);
}


let cart = JSON.parse(window.localStorage.getItem("Items"));//add to second local storage

    

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
  else{
      console.log('Out of Stock');
      alert('This product is currently not available')
  }
  removeFromCart();
  updateCart();
  appear();
}

function removeFromCart(index) {
    let removedProduct = cart.splice(index, 1)[0];
    removedProduct.quantity++;
    updateCart();
    appear();
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
        oninput="lengthConverter(${product.quantity})" onchange="lengthConverter(${product.quantity})" min="1" width="50px" height="40px"></p>
        <button onclick="removeFromCart(${index})" id="rembutton">✖</button>
        
        `
        cartContainer.appendChild(cartItem)
    });
    calculateTotal()
}
appear();
    function calculateTotal() {
    let totalElement = document.getElementById("total");
    let total = 0;
    cart.forEach((product) => {
        total += eval(product.price);
    });
    
    totalElement.textContent = `Total: R${total}`;
  }
 
  appear();
  function clearCheckoutCart() {
    let modalFooter = document.querySelector(".modal-footer");
    modalFooter.innerHTML = `
    <h4>Thank You! Your Order Has Been Processed!</h4>`;
    cart = [];
    updateCart();
}

function restart() {
    window.location.reload();
    alert('thank you for purchasing')
  }


function loadItems() {
  let loadProducts = localStorage.getItem("Products");
  if (loadProducts) {
    cart = JSON.parse(loadProducts);
    updateCart();
    appear();
  }
}

window.addEventListener("load", function () {
  loadItems();
  appear();
});
