import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import Props from './app/components/props';
import Producto from './app/components/producto';
import Cat from './app/components/Cat';
import Inputs from './app/components/Inputs';

const App = () => {
  return (
    <ScrollView>
      <Inputs></Inputs>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
});

export default App;