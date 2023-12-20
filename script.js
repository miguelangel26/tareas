document.getElementById("loginButton").addEventListener("click", function() {
    // Obtiene los valores del nombre de usuario y la contraseña
    var username = document.querySelector("input[placeholder='Username']").value;
    var password = document.querySelector("input[placeholder='Password']").value;
  
    // Verifica si las credenciales son correctas (puedes cambiar estos valores según tus necesidades)
    if (username === "Janelly" && password === "0803") {
      // Credenciales correctas, redirige a tarea.html
      window.location.href = "tarea.html";
    } else {
      // Credenciales incorrectas, muestra un mensaje de error
      alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      // También podrías mostrar un mensaje en el HTML en lugar de usar un alert
    }


    // Si la autenticación es exitosa, establecer una cookie
  document.cookie = "authenticated=true; path=/";
  });
  