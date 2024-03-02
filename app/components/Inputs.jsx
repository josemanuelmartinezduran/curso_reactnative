import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const Inputs = (props) => {
  const [text, setText] = useState('');
  return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ 
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
        }}
          placeholder="Escribe algo"
          onChangeText={(newText) => setText(newText.toUpperCase())}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text}
        </Text>
      </View>
      );
};

export default Inputs;
