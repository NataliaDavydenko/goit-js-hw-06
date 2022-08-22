const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === "" || password === "") {
    alert("Заповніть усі поля!");
  }

  
  const formData = {
    email,
    password,
  };
  
  console.log(formData);

  form.reset();
}
