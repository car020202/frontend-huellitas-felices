import React, { useState } from "react";
import axios from "axios";  
import "./Login.css";
import dogImage from "../assets/perro.png"; 
import { useNavigate } from "react-router-dom";  

const Login = () => {
  const [correo, setCorreo] = useState('');  
  const [contraseña, setContraseña] = useState(''); 
  const [error, setError] = useState('');  
  const navigate = useNavigate(); 

  // Mapea los roles que devuelves desde el backend a los nombres usados en el frontend.
  const mapRoleToName = (role) => {
    switch (role) {
      case "admin":
        return "admin";
      case "empleado":
        return "empleado";
      case "usuario":
        return "usuario";
      case "contador":
        return "contador";
      default:
        return "usuario";
    }
  };

  // Maneja la autenticación del usuario.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud al servidor para el inicio de sesión.
      const response = await axios.post('http://localhost:3000/usuario/login', {
        correo,
        contraseña
      });

      // Almacena el token en localStorage si la autenticación fue exitosa.
      const token = response.data.token;
      localStorage.setItem('token', token);

      // Decodifica el payload del token para obtener los detalles del usuario.
      const payload = JSON.parse(atob(token.split('.')[1]));

      console.log('Token Payload:', payload);  

      const rol = mapRoleToName(payload.rol); 

      // Redirige al usuario según su rol.
      switch (rol) {
        case 'admin':
          navigate('/admin');  // Redirige al dashboard de administrador
          break;
        case 'empleado':
          navigate('/empleado/dashboard'); // Redirige al dashboard de empleado
          break;
        case 'contador':
          navigate('/employee');  // Redirige al dashboard de contador
          break;
        case 'usuario':
          navigate('/dashboard');  // Redirige al dashboard de usuario
          break;
        default:
          navigate('/login');
      }
      
    } catch (error) {
      // Maneja los errores de autenticación.
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <>
      <div className="background">
        <div className="overlay">
          <div className="content-container">
            <div className="login-left">
              <img src={dogImage} alt="Dog" className="dog-image" />
            </div>
            <div className="login-right">
              <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="correo">
                      <i className="fa fa-user"></i> Correo
                    </label>
                    <input
                      type="email"
                      id="correo"
                      placeholder="Ingresa tu correo"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="contraseña">
                      <i className="fa fa-lock"></i> Contraseña
                    </label>
                    <input
                      type="password"
                      id="contraseña"
                      placeholder="Ingresa tu contraseña"
                      value={contraseña}
                      onChange={(e) => setContraseña(e.target.value)}
                      required
                    />
                  </div>
                  {error && <p className="error">{error}</p>}
                  <button type="submit" className="login-button">
                    Iniciar Sesión
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
