import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Subject } from "rxjs";

// Crear un Subject para gestionar el estado del contador
const counterSubject = new Subject();

// Valor inicial del contador
let counterValue = 0;

const Counter = () => {
  const [counter, setCounter] = useState(counterValue);

  useEffect(() => {
    // Suscribirse al Subject para recibir actualizaciones de estado
    const subscription = counterSubject.subscribe({
      next: (newValue) => {
        setCounter(newValue);
      },
    });

    // Limpiar la suscripción al desmontar el componente
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Contador: {counter}</Text>
      <Button
        title="Incrementar"
        onPress={() => {
          counterValue += 1;
          // Notificar a los suscriptores sobre el cambio
          counterSubject.next(counterValue);
        }}
      />
      <Button
        title="Decrementar"
        onPress={() => {
          counterValue -= 1;
          // Notificar a los suscriptores sobre el cambio
          counterSubject.next(counterValue);
        }}
      />
    </View>
  );
};

export default Counter;
