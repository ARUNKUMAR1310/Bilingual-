//let storeCarts = []; // Initialize with an empty array
let showOrder = [];
let totalAmount = 0;
let taxPrecentage = 0;
let totalCartAmt = 0;

// Check if 'saveCarts' data exists in localStorage
// const total = localStorage.getItem('storeCarts');
$.ajax({

  url: 'http://localhost:8080/orderMasters',
  method: 'post',
  contentType: 'application/JSON',
  data: JSON.stringify(storeCarts),
  success: function (response) {
    if (total != null) {
      storeCarts = JSON.parse(total);
  }
   
  },
  failure: function (error) {
      alert('error in registering the product');

 let html = '';

storeCarts.forEach(function (j) {
  totalAmount += Number(j.price) * Number(j.qty);
  taxPrecentage += Math.round((totalAmount / 100) * 8);

});
  }
})
totalCartAmt += Number(totalAmount) + Number(taxPrecentage);

$('#amounts').html('&#8377;' + totalAmount);
$('#taxes').html('&#8377;' + taxPrecentage);
$('#totalBill').html('&#8377;' + totalCartAmt);
$('#itemsCount').html(storeCarts.length);
//$('orderId').setItem = localStorage.getItem("orderId");



var orderId = localStorage.getItem("orderId");

  // Check if orderId exists and update the element with id "orderId"
  if (orderId) {
    //$('#orderId').text(orderId);
    document.getElementById("orderIdDisplay").textContent = orderId;
  }


function final() {
  let itemSet = localStorage.getItem('storeCarts');
  storeCarts = JSON.parse(itemSet);
  let  custName = $('#cuName').val();
  let custMobile = $('#mb').val();
  let custAddress = $('#addre').val();
  let custCity = $('#city').val();
  let custState = $('#state').val();
  let custPincode = $('#pincode').val();

  let customerAddre = {
    cuName: custName,
    mb: custMobile,
    addre: custAddress,
    city: custCity,
    state: custState,
    pincode: custPincode,
  };

  let order = {
    items: storeCarts,
    address: customerAddre,
    totalAmount: Number(totalAmount),
    totalTax: Number(taxPrecentage),
    cartTotal: Number(totalCartAmt),
  };
}
  let oldOrders = localStorage.getItem('showOrder');
  if (oldOrders) {
    showOrder = JSON.parse(oldOrders);
  }

  showOrder.push(order);
  console.log(showOrder);

  let placeAddress = JSON.stringify(showOrder);
  localStorage.setItem('showOrder', placeAddress);
  let confirmation = confirm(`Confirm to place your order`);
  if (confirmation) {
    window.location.href = 'final.html';
    $.ajax({
      url: 'http://localhost:8080/orderMasters',
      method: 'get',
      success: function (storeCarts) {

    // Clear the input fields
    $('#cuName').val('');
    $('#mb').val('');
    $('#addre').val('');
    $('#city').val('');
    $('#state').val('');
    $('#pincode').val();
  }
})
  }

$('#itemsCount').html(storeCarts.length);
