document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();  // Prevent form submission

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

    // Clear previous errors
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passError.innerHTML = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.innerHTML = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passError.innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }

}); 