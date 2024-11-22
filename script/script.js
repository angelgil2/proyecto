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

// Abre el formulario para agregar un producto
function openProductForm(productBox) {
  document.getElementById('productForm').style.display = 'block';
  // Almacena la referencia al div donde se agregó el producto (para actualizar su contenido)
  sessionStorage.setItem('currentProductBox', productBox.outerHTML);
}

// Cierra el formulario sin guardar
function closeProductForm() {
  document.getElementById('productForm').style.display = 'none';
}

// Guarda el producto en el almacenamiento local
function saveProduct() {
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  
  if (name && price) {
      // Recupera la referencia del producto donde se añadirá el producto
      const productBox = sessionStorage.getItem('currentProductBox');
      
      if (productBox) {
          // Reemplaza el div del producto con el nombre y precio
          const updatedProductBox = productBox.replace('+', `<strong>${name}</strong><br>$${price}`);
          
          // Actualiza la caja del producto en el DOM
          document.querySelector('.product-grid').innerHTML = document.querySelector('.product-grid').innerHTML.replace(productBox, updatedProductBox);
          
          // Guarda el producto en el almacenamiento local
          let products = JSON.parse(localStorage.getItem('products')) || [];
          products.push({ name, price });
          localStorage.setItem('products', JSON.stringify(products));
          
          closeProductForm();
      }
  } else {
      alert('Por favor, ingrese el nombre y precio del producto.');
  }
}

// Carga los productos guardados (opcional, para mostrar al recargar)
function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const productBoxes = document.querySelectorAll('.product-box');
  products.forEach((product, index) => {
      if (productBoxes[index]) {
          productBoxes[index].innerHTML = `<strong>${product.name}</strong><br>${product.price}`;
          
      }
  });
}

// Subir productos (esto es solo un ejemplo de cómo podrías enviar los datos)
function uploadProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  console.log('Productos Subidos:', products);
  // Aquí se podría enviar los productos a un servidor usando fetch o AJAX
}

// Llama a la función para cargar los productos cuando se recarga la página
window.onload = loadProducts;

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
