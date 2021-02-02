class General {
  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userText = document.getElementById("user-text");
        userText.innerText = user.displayName;
      } else {
        userText.innerText = "Sin Usuario";
      }
    });
  }
}

const general = new General();
