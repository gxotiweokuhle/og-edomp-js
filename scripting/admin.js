let secondArr = JSON.parse(localStorage.getItem('product'));
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
  secondArr.forEach((data) => {
    table.innerHTML += 
    ` 
    <tbody>
    <tr>
      <td>${data.id}</td>
      <td>${data.image}</td>
      <td>${data.itemname}</td>
      <td>${data.price}</td>
      <td>${data.category}</td>

    </tr>
    <tr>
    </tbody>
    `;
  
});

}
/*let formInput = document.getElementById('form-info');
let button = document.getElementById('btn');
button.addEventListener('submit', function() {
  if(formInput.value)


})*/