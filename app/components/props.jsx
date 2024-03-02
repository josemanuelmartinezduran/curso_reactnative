import React from "react";
import { Text, View, TextInput } from "react-native";

const Props = (props) => {
  const nombre = "José";
  const saluda = () => {
    return "Saludos a todos";
  };
  return (
    <View>
      <Text>
        Hola mundo {props.nombre}
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="Cambiame el nombre"
      />
    </View>
  );
};

export default Props;
