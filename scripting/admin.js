let products = [
  {
      id:1,
      image:"https://i.postimg.cc/KjLFVxFG/1.jpg",
      itemname:"Jagger 2-Seater Couch",
      price:"R 11 000",
      category:"Lounge Collection",
      quantity: "5",
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

function appear(){
  if(localStorage.getItem("Items") === null){
    localStorage.setItem("Items", JSON.stringify(products))
  }else{
    products = JSON.parse(localStorage.getItem("products"));
  }

let arr2 = document.getElementById("tableinfo")
products.forEach((product) =>{
  let proElement = document.createElement("div");
  proElement.innerHTML = `
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
        <h4 class="price">${product.category}</h4>
     </div>
     <hr>
     <div class="product-btn">
        <button type="button" data-name="Oxford" data-price="1200"  data-id="${product.id}" class="btn btn-danger" onclick="addToCart(${id})">Delete</button>
     </div>
</div>
  `
})
arr2.appendChild(proElement);
}



let secondArr = JSON.parse(localStorage.getItem('Items'));
if(!secondArr){
    secondArr = [];
}


function addObject() {
  let Value = {
    id: document.getElementById("id.no").value,
    image: document.getElementById("image").value,
    itemname: document.getElementById("itemname").value,
    price: document.getElementById("price").value,
    category: document.getElementById("cat").value,

  };

 
  secondArr.push(Value)
  localStorage.setItem('arr2', JSON.stringify(secondArr));



  let table = document.querySelector(".tableInfo");
  table.innerHTML = "";
  secondArr.forEach((product) => {
    table.innerHTML += 
    ` 
    <tbody>
    <tr>
      <td>${product.id}</td>
      <td>${product.image}</td>
      <td>${product.itemname}</td>
      <td>${product.price}</td>
      <td>${product.category}</td>

    </tr>
    <tr>
    </tbody>
    `;
  
});

}

function restart() {
  window.location.reload();
}
/*let formInput = document.getElementById('form-info');
let button = document.getElementById('btn');
button.addEventListener('submit', function() {
  if(formInput.value)


})*/