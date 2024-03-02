const https = require('https');

function getPokemonData(pokemonName, callback) {
//backtick concatenation
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        callback(null, jsonData);
      } catch (error) {
        callback(error, null);
      }
    });
  }).on('error', (error) => {
    callback(error, null);
  });
}

// Example usage
getPokemonData('pikachu', (error, data) => {
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log(data);
    console.log("Esto va a ir al final");
    getPokemonData("bulbasaur", (error, data) =>{
        if(error)
            console.error("Error en el ws");
        else{
            console.log(data);
        }
    })
  }
});


