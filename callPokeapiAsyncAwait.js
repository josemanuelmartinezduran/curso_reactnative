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

const main = async () => {
    const pokes = ["pikachu", "bulbasaur", 'charmander', 'mewtwo']
    // Example usage
    for(let i=0; i<pokes.length; i++){
        const res = await getPokemonData(pokes[i]);
        console.log(res);
    }
    /* pokes.forEach(async (poke) => {
        const res = await getPokemonData(poke);
        console.log(res);
    }) */
}

main();
