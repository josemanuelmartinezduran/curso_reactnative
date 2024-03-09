// ChildComponent.jsx
import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  sendMsg = () => {
    // Llamar a la función onSendMessage pasada por el componente padre
    this.props.onSendMessage("Hola desde el hijo!");
  };

  render() {
    return <button onClick={this.sendMsg}>Enviar Mensaje al Padre</button>;
  }
}

export default ChildComponent;
