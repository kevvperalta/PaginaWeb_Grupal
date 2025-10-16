// Espera a que todo el contenido del documento esté listo
document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("form-login");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); //Evita el envio automático del formulario

    const correo = form.correo.value.trim();
    const password = form.password.value.trim();

    //Validación del correo electronico

    if (correo === "" || password === "") {
      alert("Por favor, completa todos los campos.");
        return;
    }


    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Si todo esta correcto
    alert("Inicio de sesión exitoso");
    form.reset(); // Limpia el formulario
    });
    });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-registro");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); //evita que el formulario se envíe automaticamente

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const password = form.password.value.trim();

    // validación del nombre
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }


    // validación de la contraseña
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // si todo está correcto
    alert(" Registro exitoso. ¡Bienvenido " + nombre + "!");
    form.reset(); // Limpia el formulario
     });
    });
