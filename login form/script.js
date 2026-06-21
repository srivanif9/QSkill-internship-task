document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if(!emailPattern.test(email)){
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Password Validation
    if(password === ""){
        passwordError.textContent = "Password is required";
        isValid = false;
    }
    else if(password.length < 6){
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Success Message
    if(isValid){
        successMessage.textContent = "Login Successful!";
    }
});