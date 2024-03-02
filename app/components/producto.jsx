import React from "react";
import { Text, View, TextInput } from "react-native";

const Producto = (props) => {
  return (
    <div>
        <h1>Nombre del producto {props.nombre}</h1>
        <p>Descripción del producto {props.descripcion}</p>
        <button>Haz Algo</button>
    </div>
  );
};

export default Producto;
