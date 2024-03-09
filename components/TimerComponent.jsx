// TimerComponent.jsx
import React, { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer$ = interval(1000)
      .pipe(
        takeWhile((val) => val <= 10) // Solo emitir valores hasta 10 para evitar un temporizador infinito
      )
      .subscribe({
        next: (val) => setSeconds(val + 1),
        complete: () => console.log('Observable completed')
      });

    // Limpieza al desmontar el componente
    return () => timer$.unsubscribe();
  }, []);

  return (
    <div>
      <h4>Timer: {seconds}</h4>
    </div>
  );
};

export default TimerComponent;
