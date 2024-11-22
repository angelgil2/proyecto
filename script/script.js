document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "campesino@gmail.com" && password === "123456789") {
      window.location.href = "menu.html";
  } else {
      alert("Invalid email or password. Please try again.");
  }
});
// Regresar a la página anterior
function goBack() {
  window.history.back();
}

// Simular agregar productos en las cajas del menú
function addProduct(box) {
  if (box.innerHTML === "+") {
      box.innerHTML = "✔";
      box.style.backgroundColor = "#d32f2f";
      box.style.color = "white";
  } else {
      box.innerHTML = "+";
      box.style.backgroundColor = "#fff";
      box.style.color = "#d32f2f";
  }
}

// Simular subida de productos
function uploadProducts() {
  const products = document.querySelectorAll(".product-box");
  let addedProducts = 0;

  products.forEach(product => {
      if (product.innerHTML === "✔") {
          addedProducts++;
      }
  });

  if (addedProducts > 0) {
      alert(`Has subido ${addedProducts} producto(s).`);
  } else {
      alert("No has agregado ningún producto.");
  }
}

// Abrir y cerrar el menú desplegable
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("show");
}
function proximamente(){
  alert("Proximamente :)");
}

// Cerrar el menú desplegable si haces clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('.menu-button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
};
