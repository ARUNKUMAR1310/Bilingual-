function signup() {
    let name = $("#name").val();
    let email = $("#email").val();
    let mobile = $("#mobile").val();
    let password = $("#password").val();
    
    let signupObj = {
        name: name,
        email: email,
        mobile: mobile,
        password: password
    };
    $.ajax({

        url: 'http://localhost:8080/users/postRegister',
        method: 'post',
        contentType: 'application/JSON',
        data: JSON.stringify(signupObj),
        success: function (response) {
            alert("Registration successful!");
            window.location.href = "login.html";
        },
        failure: function (error) {
            alert('error in registering the product');
        }
})
   
    
    // Prevent the form submission
   


    }




