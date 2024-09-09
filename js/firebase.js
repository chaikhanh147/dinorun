
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpebJIuBI_p19zAJfoP3FX45uTKjhEDaQ",
  authDomain: "dino-835c4.firebaseapp.com",
  projectId: "dino-835c4",
  storageBucket: "dino-835c4.appspot.com",
  messagingSenderId: "248555633665",
  appId: "1:248555633665:web:85fea8e536147d4c499400",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

