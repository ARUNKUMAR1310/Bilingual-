let currentOrderNumber = 0;

function generateOrderId() {
    currentOrderNumber = parseInt(localStorage.getItem("currentOrderNumber")) || 0;
    currentOrderNumber ++;
    localStorage.setItem("currentOrderNumber", currentOrderNumber);
  const formattedOrderNumber = currentOrderNumber.toString().padStart(4, '0'); // Ensure 4-digit format
  localStorage.setItem("orderId", JSON.stringify(formattedOrderNumber));
  //window.location.href = "home.html";
  return false;

}
// function login() {
//     var username = $("#username").val();
//     var password = $("#password").val();

//     // Retrieve user registration data from local storage
//     const storedUserData = JSON.parse(localStorage.getItem("user"));
//     // Usage example
//      //  const orderId = generateOrderId();
//       $.ajax({
//         url: 'http://localhost:8080/users/getRegister',
//         method: 'GET',
//         success: function(response) {
          
//     if (storedUserData && email === storedUserData.email && password === storedUserData.password) {
//       alert("Login successful!");
//       window.location.href = "home.html"; // Redirect to the desired page
//   } else {
    
//       alert("Login failed. Please check your credentials.");
//   }
//           console.log(response);
//         },
//         error: function(err) { // Use 'error' instead of 'fail'
//           console.log(err);
//         }
//       });

// }
function login() {
  var username = $("#username").val();
  var password = $("#password").val();

  // Retrieve user registration data from local storage
  const storedUserData = JSON.parse(localStorage.getItem("user"));


  $.ajax({
      url: 'http://localhost:8080/users/getRegister',
      method: 'GET',
      success: function(response) {
          if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
              alert("Login successful!");
              window.location.href = "home.html"; // Redirect to the desired page
          } else {
              alert("Login failed. Please check your credentials.");
          }
          console.log(response);
      },
      error: function(err) {
          console.log(err);
      }
  });

  return false; // Prevent the form from submitting
}

// Define the logout function
function logout() {
  // Clear the user's session data from Local Storage
     

  // Display a logout message
  alert("Logged out Successfully");

  // Redirect the user to the login page or any other desired page
  window.location.href = "login.html";
}





// // Add a click event listener to the "Logout" button
// document.getElementById("logoutButton").addEventListener("click", function() {
//   logout(); 
// });
