const pokemonImg = document.querySelector('#pokemonImg')
const pokemonName = document.querySelector('#pokemonName')
const pokemonStats = document.querySelector('#pokemonStats')

async function getPokemon(name){
	const request = await fetch('https://pokeapi.co/api/v2/pokemon/'+name+'/')
	const response = await request.json();
	return response;
  }

  function drawPokemon(pokemon) {
	pokemonImg.srcset = pokemon.spirites.front_default;
	pokemonName.innerText = pokemon.name;
	pokemonStats.innerHTML = pokemon.stats.map(el => {
		return `<li>${el.stat.name}: ${el.base_stat}</li>`;

	}).join('');
  }

  async function load (name){
	const pokemon = await getPokemon (name);
	drawPokemon(pokemon)

  }
  async function start(){
	load('charizard')
}
start();
