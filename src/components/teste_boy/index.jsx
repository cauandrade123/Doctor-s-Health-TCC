import { useState } from "react";
import Chat from "../bot";
import './index.scss'; // Importe o arquivo SCSS

export default function ChamarChat() {
  const [chamar, setChamar] = useState(false);

  const mostrar = () => {
    setChamar(!chamar);
  };

  return (
    <div className="ChamarBot">
      <button className="abrir" onClick={mostrar}>
        {chamar ? "Fechar" : "Abrir Chat"}
      </button>

      {chamar && (
        <div className="chat-popup">
          <Chat />
        </div>
      )}
    </div>
  );
}
