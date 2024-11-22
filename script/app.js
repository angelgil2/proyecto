// Validación del formulario
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío del formulario por defecto

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Credenciales correctas
  if (email === "campesino@gmail.com" && password === "123456789") {
    window.location.href = "menu.html"; // Redirige al menú
  } else {
    alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
  }
});
