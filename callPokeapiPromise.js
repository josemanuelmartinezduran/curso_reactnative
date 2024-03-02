const https = require('https');
//Eliminar la funcion callback

const getPokemonData = (pokemonName) => {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    })
}

// Example usage
const res = getPokemonData('pikachu').then(data => {
    console.log(data);
}).error(err => {
    console.log(err);
});