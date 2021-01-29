class Autentication {
  createAccountWithEmail(email, password, name) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        console.log("Todo bien!" + name);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  authEmail(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Has ingresado correctamente");
        window.location.replace("/sale.html");
      })
      .catch((error) => {
        console.log("Ha habido un problema");
      });
  }
}
