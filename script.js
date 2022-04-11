const form = document.getElementById("form");
const email = document.getElementById("email");

// Check if the entered value is a valid email address
function validEmail(enteredEmail) {
  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(enteredEmail);
}

// Show error message on screen
function addErrorMessage(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.classList.add("show");
}

// Remove error message from screen
function removeErrorMessage() {
  const errorMessage = document.getElementById("error-message");
  errorMessage.classList.remove("show");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Remove all previous error messages
  removeErrorMessage();

  // Get the value of the entered email, trim it to remove added white space
  const enteredEmail = email.value.trim();

  // If email field is emtpy display a message
  if (enteredEmail == "") {
    addErrorMessage("Oops! Please add your email");
  }
  // If the entered field is invalid, display a message
  else if (!validEmail(enteredEmail)) {
    addErrorMessage("Opps! Please check your email");
  }
});
