const loginForm = document.getElementById("login-form");

const auth = new Autentication();

loginForm.addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (e.submitter.id === "btnEntrar") {
    auth.authEmail(email, password);
  } else {
    const userName = document.getElementById("name").value;
    auth.createAccountWithEmail(email, password, userName);
  }
  e.preventDefault();
});
