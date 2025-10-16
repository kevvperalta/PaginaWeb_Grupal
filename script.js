// Espera a que todo el contenido del documento esté listo
document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("form-login");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const correo = form.correo.value.trim();
    const password = form.password.value.trim();

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!emailRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Si todo está correcto
    alert("Inicio de sesión exitoso");
    form.reset(); // Limpia el formulario
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-registro");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const password = form.password.value.trim();

    // Validación del nombre
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Validación de la contraseña
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Si todo está correcto
    alert("Registro exitoso. ¡Bienvenido " + nombre + "!");
    form.reset(); // Limpia el formulario
  });
});
