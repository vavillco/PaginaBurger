// INICIO JS PARA HEADER Y FOOTER DE LAS PAGINAS
document.getElementById("idheader").innerHTML = `
<div class="header">
<nav>
  <label for="" >
    <a href="index.html"> <img src="img/burger.png" alt="burgericon"></a>
  </label>

  <ul>
  <a href="index.html"> INICIO</a>
  <a href="altas.html"> ALTAS</a>
  <a href="listado.html"> LISTADO</a>
  <a href="modificaciones.html"> MODIFICAR</a>
  <a href="listadoEliminar.html"> ELIMINAR</a>
  <a href="carrito.html"> <img src="img/carrito.png" alt="carrito"></a>
  </ul>  
</nav>
</div>
`
document.getElementById("idfooter").innerHTML = `
<div class="container">
    <ul>
      <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
      <li> <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
      <li><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
          
      <p>&copy; 2023 BURGER</p>

</div>
`
// FIN JS PARA HEADER Y FOOTER DE LAS PAGINAS
// INICIO JS DE FORMULARIO DE CONTACTO.HTML
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function validateForm() {
  if (nameInput.value.trim() === "") {
    alert("Por favor, ingrese su nombre.");
    return false;
  }
  
  if (emailInput.value.trim() === "") {
    alert("Por favor, ingrese su correo electrónico.");
    return false;
  }
  
  if (!isValidEmail(emailInput.value)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }
  
  return true;
}

function isValidEmail(email) {
  // Una simple validación de correo electrónico usando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// FIN JS DE FORMULARIO DE CONTACTO.HTML
