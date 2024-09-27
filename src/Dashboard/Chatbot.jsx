import React, { useState } from "react";
import axios from "axios";
import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hola, ¿en qué puedo ayudarte?", isBot: true },
  ]);
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el chatbot

  // Función para enviar el mensaje al backend
  const handleSend = async () => {
    if (input.trim() === "") return;
  
    // Añadir mensaje del usuario al historial de mensajes
    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
  
    try {
      // Petición a tu backend
      const response = await axios.post('http://localhost:3000/chatbot/enviar', {
        message: input,  // Aquí asegurarse de que se envíe correctamente
      });
  
      // Añadir respuesta del chatbot al historial de mensajes
      const botMessage = { text: response.data.response, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error al conectar con el chatbot:", error);
      const errorMessage = { text: "Lo siento, hubo un problema con la conexión.", isBot: true };
      setMessages((prev) => [...prev, errorMessage]);
    }
  
    setInput(""); // Limpiar el input después de enviar el mensaje
  };
  

  // Función para abrir/cerrar el chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : "closed"}`}>
      <div className="chatbot-header" onClick={toggleChatbot}>
        <span>{isOpen ? "▼ Minimizar" : "▲ Abrir Chat"}</span>
      </div>
      {isOpen && (
        <div className="chatbot-content">
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.isBot ? "bot-message" : "user-message"}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
