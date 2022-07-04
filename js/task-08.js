const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені!");
  } else {
    console.log(formData);
    form.reset();
  }
}
