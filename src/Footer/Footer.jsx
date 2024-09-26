import React from 'react';
import './Footer.css'; // Importamos el archivo CSS para personalizar los estilos

function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-4">
      <div className="containerf">
        <div className="row">
          {/* Columna de información de contacto */}
          <div className="col-md-4">
            <h5 className="text-uppercase font-weight-bold mb-4">Huellitas Felices Santa Ana</h5>
            <p>10a avenida sur y 23a Calle Poniente, Santa Ana</p>
            <p><i className="fas fa-phone-alt"></i> 7777-7777</p>
            <p><i className="fas fa-envelope"></i> huellitasfelices@gmail.com</p>
            
          </div>

          {/* Columna de servicios */}
          <div className="col-md-4">
            <h5 className="text-uppercase font-weight-bold mb-4">Servicios</h5>
            <ul className="list-unstyled">
              <li>Vacunacion</li>
              <li>Desparacitacion</li>
              <li>Control de peso</li>
              <li>Chequeo Dental</li>
              <li>Consulta General</li>
              
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-md-4">
            <h5 className="text-uppercase font-weight-bold mb-4">Síguenos</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Línea de crédito */}
        <div className="text-center mt-4">
          <p>© 2024 Huellitas Felices | Platform Developed by VILLANUEVADEV</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
