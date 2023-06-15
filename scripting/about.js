let pictures =[
    {
        id:1,
        image:"https://i.postimg.cc/HnrV7yXS/our-store.jpg",
        names:"FurnitureExperts Store, in Somerset Mall. Customers can also purchase in-person and get their orders delivered same day!",
    },
    {
        id:2,
        image:"https://i.postimg.cc/qqqCXYVx/delivery-team.jpg",
        names: "Cape Movers, Our Delivery team ensures all the orders are delivered on time and the products are not damaged.",
    },
];
function appear(event){
}
let showimages = document.querySelector(".images");
  pictures.forEach((data) => {
    showimages.innerHTML += `
      <div class= "card col-12 col-md-4 col-sm-3" style="width: 500px">
      <img class= "card-img-top mt-5 mx-4" src="${data.image}" style="width: "300px">
      <div class="card-body mb-5">
      <p class= "text-dark fw-bold">${data.names}</p>
      </div>
      </div>`;
  });
