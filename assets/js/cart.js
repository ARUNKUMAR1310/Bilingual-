
let storeCarts = [];

function itemsCarts() {
  let totalCartAmount = 0;
  let tax = 0;
  let totalPrice = 0;
  
  $.ajax({
    url: 'http://localhost:8080/cartItem',
    method: 'get',
    success: function (aaa) {
      storeCarts=aaa;
  // if (cartCount !== null) {
  //   storeCarts = JSON.parse(cartCount);
  
    let html = '';
    aaa.forEach((item) => {
      // Calculate cart amount for each item
      item.cartAmount = item.price * item.qty;
      totalCartAmount += item.cartAmount;
  
      // Calculate tax for each item (10% of item's cartAmount)
      item.tax = item.cartAmount * 0.1;
  
      // Calculate total price for each item (cartAmount + tax)
      item.totalPrice = item.cartAmount + item.tax;
  
      // Add item's tax and total price to the global tax and total price
      tax += item.tax;
      totalPrice += item.totalPrice;

      

      // Create HTML to display each cart item
      html = html+ `<tr>
        <td>${item.product.sno}</td>
        <td>${item.product.company}</td>
        <td><img src="${item.product.url}" alt="Product Image" width="20%"></td>
        <td>${item.product.varient}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="add('${item.id}')">+</button>
          <span>${item.qty}</span>
          <button class="btn btn-sm btn-primary" onclick="minus('${item.id}')">-</button>
        </td>       
        <td>${item.product.price}</td>
        <td>${item.tax}</td></td>
        <td>${item.cartAmount}</td>
        <td>${item.totalPrice}</td>
        <td><button class="btn btn-danger" onclick="deleteCart('${item.id}')">Delete</button></td>
      </tr>`;
    });
    $('#engine').html(html);
    $('#totalCartAmount').html(totalCartAmount);
    $('#tax').html(tax);
    $('#totalPrice').html(totalPrice);
    },
    error: function (xhr, status, error) {
      $('#itemsCount').html(aaa.length);
      alert('Error in registering the cart. Status: ' + status + ', Error: ' + error);
    },
    async:false
 });
  
 }

function add(id) {
  let idx = storeCarts.find((o) => o.id == id);
  idx.qty =idx.qty + 1;
  console.log(idx.qty);
$.ajax({
    url: 'http://localhost:8080/cartItem',
    method: 'post', 
    contentType: 'application/json',
    data: JSON.stringify(idx),
    success: function () {
      updateCartData();
      itemsCarts(); 
    },
    error: function (xhr, status, error) {
      alert('Error in registering the product. Status: ' + status + ', Error: ' + error);
    }
  });
  }

function minus(id) {
  let idx = storeCarts.find((o) => o.id == id);
  idx.qty =idx.qty-1;
  console.log(idx.qty); 
  $.ajax({
    url: 'http://localhost:8080/cartItem',
    method: 'post', 
    contentType: 'application/json',  
    data: JSON.stringify(idx),
    success: function () {
      updateCartData();
      itemsCarts(); 
    },
    error: function (xhr, status, error) {
      alert('Error in registering the product. Status: ' + status + ', Error: ' + error);
    }
  });

  
}

function deleteCart(id) {
  let idx = storeCarts.findIndex((o) => o.id == id);
  storeCarts.splice(idx, 1);
   $.ajax({
    url: `http://localhost:8080/cartItem?id=${id}`,
    method: 'delete',
    success: function () {
      // updateCartData();
      itemsCarts();  
      },
    failure: function () {
        console.log(error);
    }
});
}

function updateCartData() {
   $.ajax({
    url: `http://localhost:8080/cartItem`,
    method: 'update',
    success: function () {
  const updatedData = JSON.stringify(storeCarts);
  itemsCarts();
},
failure: function () {
  console.log(error);
}
})

}

function deleteAll() {
    $.ajax({
      url: 'http://localhost:8080/cartItem',
      method: 'delete',
      success: function () {
        let confirms = confirm('Are you sure about deleting all items from the cart?');
        if (confirms) {
          storeCarts = [];
          updateCartData();
        itemsCarts();
      }
    },
      failure: function () {
          console.log(error);
      }
  })
  }
function removeFromCart(sno) {
  const idx = storeCarts.findIndex((item) => item.sno === sno);
  if (idx !== -1) {
    storeCarts.splice(idx, 1);
    updateCartData();
    itemsCarts();
  }
}

itemsCarts();
