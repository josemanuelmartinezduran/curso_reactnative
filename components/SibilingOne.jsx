// SiblingOne.jsx
import React from "react";
import { sendMessage } from "./SiblingCommunicationService";

class SiblingOne extends React.Component {
  render() {
    return (
      <button onClick={() => sendMessage("Hola desde el hermano Uno!")}>
        Enviar Mensaje a Hermano Dos
      </button>
    );
  }
}

export default SiblingOne;
