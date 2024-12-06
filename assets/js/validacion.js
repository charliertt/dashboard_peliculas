console.log("hola");
$(document).ready(function() {
    $('#registroForm').parsley().on('form:submit', function() {
        const email = $('input[type="email"]').val();
        const password = $('#clave').val();
        
        // Imprimir los valores en la consola
        console.log("Email:", email);
        console.log("Contraseña:", password);
  
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de Sesión Exitoso!',
            text: 'Bienvenido de Vuelta',
            confirmButtonText: 'Aceptar',
            timer: 3000,
            timerProgressBar: true,
            willClose: () => {  
                window.location.href = "index.html";  // Redirige después de la alerta
            }
        });
  
        return false; // Evitar el envío tradicional del formulario
    });
  });