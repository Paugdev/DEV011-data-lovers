// import { type } from './dataFunctions.js';
import { renderItems } from "./view.js";

// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

const pokemonName = (pokemons) => {
  const nombres = pokemons.map((pokemon) => {
    return pokemon.name;
  });
  return nombres;
};

// console.log(example, renderItems, data);
console.log(pokemonName(data.pokemon));

const pokemons = data.pokemon;

const pokemonsContainer = document.getElementById("pokemonsContainer");

pokemonsContainer.innerHTML = "";
pokemons.forEach((pokemon) => {
  let pokemonCard = document.createElement("li");
  pokemonCard.setAttribute("class", "contenedor-imagen-pokemon");
  pokemonCard.innerHTML = `
  <p class="pokename">${pokemon.name}</p>
      <img class="img-pokemon" id="imagePokemon" src="${pokemon.img}"> 
      `;
  pokemonsContainer.appendChild(pokemonCard);
});
