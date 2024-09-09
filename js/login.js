// login.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của form

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, username, password);
    window.location.href = 'index.html'; // Chuyển hướng đến trang chính sau khi đăng nhập thành công
  } catch (error) {
    alert('Đăng nhập không thành công: ' + error.message);
  }
});
