let arr2 = JSON.parse(localStorage.getItem(products));
if(!arr2){
  arr2 = [];
}

function addObject() {
      
  let Value = {
    id: document.getElementById("id.no").value,
    image: document.getElementById("image").value,
    itemname: document.getElementById("itemname").value,
    price: document.getElementById("price").value,
    category: document.getElemntById("cat").value,

  };

 
  arr2.push(Value)
  localStorage.setItem("products", JSON.stringify(arr2));


  let table = document.querySelector(".tableInfo");
  table.innerHTML = "";
  arr2.forEach((product) => {
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
