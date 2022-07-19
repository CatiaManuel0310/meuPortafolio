const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const contactConfirmation = document.getElementById("contact-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const contactValue = contact.value;
  const contactConfirmationValue = contactConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (contactValue === "") {
    setErrorFor(contact, "O contato é obrigatória.");
  } else if (contactValue.length < 10) {
    setErrorFor(contact, "O contato precisa ter no mínimo 10 caracteres.");
  } else {
    setSuccessFor(contact);
  }

  if (contactConfirmationValue === "") {
    setErrorFor(contactConfirmation, "A confirmação de contato é obrigatória.");
  } else if (contactConfirmationValue !== contactValue) {
    setErrorFor(contactConfirmation, "Os contatos não conferem.");
  } else {
    setSuccessFor(contactConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  //colocar quatro

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}