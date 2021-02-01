class Autentication {
  createAccountWithEmail(email, password, name) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        res.user.updateProfile({
          displayName: name,
        });
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
        console.log(res);
        console.log("Has ingresado correctamente");
        /*         window.location.replace(
          "https://luismadf.github.io/Proyecto_conexion_movil/sale.html"
        ); */
      })
      .catch((error) => {
        console.log("Ha habido un problema");
      });
  }
}
