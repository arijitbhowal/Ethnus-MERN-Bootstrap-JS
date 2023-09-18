// Validate the form before submitting it.
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("invalid");
  }
});

// Remove the invalid class from the form when the user fixes the errors.
form.addEventListener("change", function() {
  form.classList.remove("invalid");
});
