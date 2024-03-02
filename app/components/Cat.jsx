import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Me llamo {props.nombre} el gato tiene {isHungry?"hambre":"sueño"}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        title={isHungry?'Dale de comer':'Dejalo dormir'}
      />
    </View>
  );
};


export default Cat;