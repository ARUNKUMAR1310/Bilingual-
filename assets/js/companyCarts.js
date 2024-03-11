
'use strict';

let companyCarts = [];

function itemsCarts() {
  let totalCartAmount = 0;
  let tax = 0;
  let totalPrice = 0;
  const cartCount = localStorage.getItem('companyCarts');
  console.log("companyCarts",companyCarts);
  if (cartCount !== null) {
    companyCarts = JSON.parse(cartCount);
  
    let html = '';
    companyCarts.forEach((item) => {
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
      html += `<tr>
      <td>${item.modelno}</td>
      <td>${item.company}</td>
      <td><img src="${item.url}" alt="Product Image" width="20%"></td>
      <td>${item.qty}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="add('${item.modelno}')">+</button>
        <button class="btn btn-sm btn-primary" onclick="minus('${item.modelno}')">-</button>
      </td>       
      <td>${item.price}</td>
      <td>${item.tax}</td>
      <td>${item.cartAmount}</td>
      <td>${item.totalPrice}</td>
      <td><button class="btn btn-danger" onclick="deleteCart('${item.sno}')">Delete</button></td>
    </tr>`;
    
    });
    $('#engine').html(html);
    $('#totalCartAmount').html(totalCartAmount);
    $('#tax').html(tax);
    $('#totalPrice').html(totalPrice);
    
  }
}

function add(modelno) {
  let idx = companyCarts.findIndex((o) => o.modelno === modelno);
  companyCarts[idx].qty = Number(companyCarts[idx].qty) + 1;
  updateCartData();
  itemsCarts();
}

function minus(modelno) {
  let idx = companyCarts.findIndex((o) => o.modelno === modelno);
  if (companyCarts[idx].qty > 1) {
    companyCarts[idx].qty = Number(companyCarts[idx].qty) - 1;
  } 
  updateCartData();
  itemsCarts();
}

function deleteCart(modelno) {
  let idx = companyCarts.findIndex((o) => o.modelno === modelno);
  companyCarts.splice(idx, 1);
  updateCartData();
  itemsCarts();
}

function updateCartData() {
  const updatedData = JSON.stringify(companyCarts);
  localStorage.setItem('companyCarts', updatedData);
}

function deleteAll() {
  let confirms = confirm('Are you sure about deleting all items from the cart?');
  if (confirms) {
    companyCarts = [];
    updateCartData();
    itemsCarts();
    localStorage.setItem('companyCarts', JSON.stringify([]));
  }
}

function removeFromCart(modelno) {
  const idx = companyCarts.findIndex((item) => item.modelno === modelno);
  if (idx !== -1) {
    companyCarts.splice(idx, 1);
    updateCartData();
    itemsCarts();
  }
}

itemsCarts();
