#!/usr/bin/env node

const inquirer = require("inquirer");

// const yargs = require("yargs");
// const { argv } = yargs(process.argv);

// console.log(process.argv);

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const data = await response.json();
  const moves = data.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();
prompt({
  type: "input",
  name: "pokemon",
  message: "Enter the name of a Pokémon to get its moves:",
})
  .then((answers) => {
    const pokemon = answers.pokemon.toLowerCase();
    printFiveMoves(pokemon);
  })
  .catch((error) => {
    console.error("Error fetching Pokémon moves:", error);
  });

// printFiveMoves(argv.pokemon);
