import React, { useState } from "react";

// Componente de inicio de sesión
function Login() {

  // Estados para guardar los datos
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  // Función al enviar el formulario
  const handleLogin = (e) => {
    e.preventDefault();

    if (!correo || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Simulación de login
    if (correo === "admin@gmail.com" && password === "1234") {
      alert("Inicio de sesión exitoso ✅");
    } else {
      alert("Datos incorrectos ❌");
    }

    // Limpiar campos
    setCorreo("");
    setPassword("");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Ingresar</button>

      </form>
    </div>
  );
}

export default Login;