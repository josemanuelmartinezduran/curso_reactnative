// SiblingTwo.jsx
import React from "react";
import { getMessage } from "./SiblingCommunicationService";

class SiblingTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  async componentDidMount() {
    //Devuelve observable
    //const resultado = await lastValueFrom(getMessage());
    this.subscription = getMessage().subscribe((message) => {
      this.setState({ message });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return <div>Mensaje recibido: {this.state.message}</div>;
  }
}

export default SiblingTwo;
