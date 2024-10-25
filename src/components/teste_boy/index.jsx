import { useState } from "react";
import Chat from "../bot";
import './index.scss'; // Importe o arquivo SCSS
import { FaHeadset } from "react-icons/fa";

export default function ChamarChat() {
  const [chamar, setChamar] = useState(true);

  const mostrar = () => {
    setChamar(!chamar);
  };

  return (
    <div className="ChamarBot">
  
  



  
      
  <button className="abrir" onClick={mostrar}>
        <FaHeadset size={30} />
  </button>
      {chamar && (
        <div className="chat-popup">
          <Chat />
        </div>
      )}
    </div>
  );
}
