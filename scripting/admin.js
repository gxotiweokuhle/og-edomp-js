let arr2 = JSON.parse(localStorage.getItem(products));
if(!arr2){
  arr2 = [];
}

function addObject() {
      
  let Value = {
    id: id,
    image: image,
    itemname: itemname,
    price: price,
    category: category,

  };

 
  arr2.push(Value)
  localStorage.setItem("products", JSON.stringify(arr2));


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
