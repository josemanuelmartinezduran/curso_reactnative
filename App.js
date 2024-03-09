import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Sibiling from './components/sibiling';
import Counter from './components/Counter';
import { ScrollView } from 'react-native-web';
import ParentComponent from './components/ParentComponent';
import SiblingOne from './components/SibilingOne';
import SiblingTwo from './components/SibilingTwo';
import SiblingThree from './components/SiblingThree';

export default function App() {
  let general = "Variable Global"
  const [titulo, setTitulo] = useState("Bienvenido");
  const setGeneral = (value)=>{
    general = value;
  }
  setTimeout(()=>{
    general="Otro valor";
    console.log("Valor cambiado");
  }, 2000)
  return (
    <ScrollView>
      <SiblingOne></SiblingOne>
      <SiblingTwo></SiblingTwo>
      <SiblingTwo></SiblingTwo>
      <SiblingTwo></SiblingTwo>
      <SiblingTwo></SiblingTwo>
      <SiblingThree></SiblingThree>
      <SiblingThree></SiblingThree>
      <SiblingThree></SiblingThree>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
