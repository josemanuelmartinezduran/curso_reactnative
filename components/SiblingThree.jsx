// SiblingTwo.jsx
import React from "react";
import { getMessage } from "./SiblingCommunicationService";
import { sendMessage } from "./SiblingCommunicationService";

class SiblingThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  componentDidMount() {
    this.subscription = getMessage().subscribe((message) => {
      this.setState({ message });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <>
    <div>Estoy recibiendo este mensaje: {this.state.message}</div>
    <button onClick={() => {sendMessage("Mensaje desde el tercer hermano!")}}>
        Botón en hermano tres
      </button>
      <button onClick={() => {this.subscription.unsubscribe()}}>
        Cancelar mi suscripción
      </button>
    </>
    );
  }
}

export default SiblingThree;
