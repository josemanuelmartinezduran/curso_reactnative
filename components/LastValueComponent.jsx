import React, { useState } from 'react';
import { firstValueFrom, lastValueFrom, of } from 'rxjs';

const LastValueComponent = () => {
  const [lastValue, setLastValue] = useState('');

  const fetchLastValue = async () => {
    // Simula un Observable que emite varios valores y luego se completa
    const observable = of('Primero', 'Segundo', 'Último');

    try {
      // Usa lastValueFrom para convertir el Observable en una Promesa
      const value = await firstValueFrom(observable);
      setLastValue(value); // Actualiza el estado con el último valor emitido
    } catch (error) {
      console.error('Error al obtener el último valor:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchLastValue}>Obtener Último Valor</button>
      <p>Último Valor: {lastValue}</p>
    </div>
  );
};

export default LastValueComponent;
