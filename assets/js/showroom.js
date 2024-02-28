let carList = [];
let companyCarts = [];

function booking() {
  let html = '';
  const branch = localStorage.getItem('carList');
  if (branch != null) {
    carList = JSON.parse(branch);
  }
  console.log(carList);
  carList.forEach((o, idx) => {
    console.log(o.modelno);
    html += `
      <div class="card" style="width: 18rem; margin: 10px;" class="col-3">
        <img src="${o.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${o.company}</h5>
          <p class="card-text">${o.modelno}</p>
          <p class="card-text">${o.price}</p>
          <button class="btn btn-danger" onclick="addCart(${o.modelno})"><i class="fa-solid fa-cart-plus"></i>Add Cart</button>
        </div>
      </div>`;
  });

  $("#remote").html(html);
}

function addCart(code) {
  // debugger;
  console.log('addCart function called');

  // code = code.toString(); // This line is unnecessary

  const item = carList.find((o) => {
    return o.modelno == code;
  });

  if (item) {
    console.log('Adding car to cart:', item);
    const existingCartItem = companyCarts.find((cartItem) => cartItem.modelno === code);

    if (existingCartItem) {
      existingCartItem.qty += 1;
    } else {
      item.qty = 1;
      companyCarts.push(item);
    }

    localStorage.setItem("companyCarts", JSON.stringify(companyCarts));
    $("#itemsCount").html(companyCarts.length);
    alert(`Product ${item.company} added to the cart successfully!`); // Fix alert message
  }
}

booking();
// You may want to call addCart with a specific code here, if needed.
