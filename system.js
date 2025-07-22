// system.js

// Simpan user ke localStorage
function simpanUser(username, password) {
  const data = {
    username: username,
    password: password
  };
  localStorage.setItem("userData", JSON.stringify(data));
}

// Ambil user dari localStorage
function ambilUser() {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : null;
}

// Fungsi untuk proses registrasi
function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Isi nama pengguna dan kata sandi.");
    return;
  }

  simpanUser(username, password);
  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "index.html"; // Arahkan kembali ke login.html
}

// ✅ INI yang perlu kamu tambahkan dengan benar:
function handleLogin(event) {
  event.preventDefault();

  const inputUsername = document.getElementById("username").value.trim();
  const inputPassword = document.getElementById("password").value;

  const user = ambilUser();

  if (user && user.username === inputUsername && user.password === inputPassword) {
    alert("Login berhasil!");
    window.location.href = "home.html";
  } else {
    alert("Login gagal. Nama pengguna atau kata sandi salah.");
  }
}
