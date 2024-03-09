import React, { useState } from "react";
import { Button, Text, View } from "react-native";

class Sibiling extends React.Component {
    isHungry = false;
  constructor(props) {
    super(props);
    this.state = { 
        color: "red",
        variableState: "Valor por default",
        isHungry: false 
    };
    console.log(this.state);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ variableState: this.props.general });
    }, 1000);
  }

  render() {
    return (
      <View>
        Me llamo {this.props.nombre} la variable general es { this.props.general }
        <Button 
        onPress={
            ()=>{
                this.props.onChangeTitulo;
                this.setState({color: "Verde"})
            }
        }
        title="Cambia el state"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        ></Button>
        <p>Valor del state {this.state.color}</p>
      </View>
    );
  }
}

export default Sibiling;
