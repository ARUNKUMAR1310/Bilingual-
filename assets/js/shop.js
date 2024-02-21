'use strict'; // Fix the typo, it should be 'use strict' instead of 'use script'
let storeCarts = [];
function delivery() {
  let html = '';
  // const garage = localStorage.getItem('bikeList');
  // if (garage != null) {
  //   bikeList = JSON.parse(garage);
  // }
  console.log(bikeList);
   const data= $.ajax({
    url: 'http://localhost:8080/products/getData',
    method: 'get',
    success: function (response) {
     console.log("response",response);
     bikeList=response;
     bikeList.forEach((o, idx) => {
      console.log(o.sno);
      html += `
        <div key="${idx}" class="card" style="width: 18rem; margin: 10px;" class="col-3">
          <img src="${o.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${o.company}</h5>
            <p class="card-text">${o.model}</p>
            <p class="card-text">${o.price}</p>
            <a href="#" class="btn btn-primary">Add Bikes</a>
            <button class="btn btn-danger" onclick="addCart(${o.id})"><i class="fa-solid fa-cart-plus"></i>Add Cart</button>
          </div>
        </div>`;
    });
  
    $("#remote").html(html);
    },
    async:false
   })
   console.log("data",data);
}

function addCart(id) {
  // debugger;
  console.log('addCart function called');

  // code = code.toString(); // This line is unnecessary

  const item = bikeList.find((o) => {
    return o.id == id;
  });
  console.log(bikeList);
  

  if (item) {
    console.log('Adding item to cart:', item);
    const existingCartItem = storeCarts.find((cartItem) => cartItem.id === id);

    if (existingCartItem) {
      existingCartItem.qty += 1;
    } else {
      item.qty = 1;
      storeCarts.push(item);
    }
    console.log(id);
    $.ajax({
      url: 'http://localhost:8080/cartItem',
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify({...item,product:{id}}), 
      success: function () {
        document.getElementById("itemsCount").innerHTML = storeCarts.length;
        alert(`Product ${item.company} added to the cart successfully!`); // Fix alert message
    
      },
      error: function (xhr, status, error) {
        alert('Error in registering the product. Status: ' + status + ', Error: ' + error);
      },
      async:false
    }); 
      }
    }
delivery();
