// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; // Asegúrate de que la ruta sea correcta

class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
    }
  
    render() {
      return (
        <div>
          <h2>Mensaje del hijo: {this.state.message}</h2>
          <ChildComponent onSendMessage={(mensaje)=>{
            this.setState({message: mensaje});
            } } />
        </div>
      );
    }
  }
  

export default ParentComponent;

