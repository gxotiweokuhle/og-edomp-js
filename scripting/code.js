let featured = [
    {
        id:1,
        image:"https://i.postimg.cc/sXwhWz82/jagger-leather-modular-corner-couch-set-lead.jpg",
        name:"Jagger-Leather Couch",
    },
    {
        id:2,
        image:"https://i.postimg.cc/qB1shcVG/ashford-tv-stand-large.jpg",
        name:"Ashton TV-stand",
    },
    {
        id:3,
        image:"https://i.postimg.cc/HLmcPj1x/peyton-acacia-wood-pedestal.jpg",
        name:"Acacia Wood-pedestal",
    },
];
function appear(event){
}
let featureGroup = document.querySelector("#featuredproducts");
featured.forEach((data) => {
  featureGroup.innerHTML += `
    <div class="col-lg-4 col-md-4 col-12">
     <div class="card p-1 mx-auto px-3 mb-3 text-center" style="width:295px; height="400px">
        <img class="card-img-top" src="${data.image}" alt="Card image" style="width:250px; height: 300px; >
        <div class="card-body text-centre">
        <h4 class="card-title">${data.name}</h4>
        <a href="" class="btn btn-dark" style="width: 110px">Shop Now!</a>
        </div>
    </div>`;
});