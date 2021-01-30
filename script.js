let nameSubmit = document.getElementById('user-name')
// console.log(nameSubmit);
nameSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById('user-name').style.display = "none"
  document.getElementById('user-pokemon-name').style.display = "block"
  // https://stackoverflow.com/questions/11226489/show-hide-forms-using-buttons-and-javascript
});
let pokemonSubmit = document.getElementById('user-pokemon-name')
pokemonSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
});
// Api call(math.random 1118 total) to get opposing pokemon sprite, and set a varible of the type
// appened and display opposing sprite
async function randomPokemon(num) {
  try {
    const opposingPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    let opposingName = opposingPokeData.data.name
    let opposingSprite = opposingPokeData.data.sprites.front_default
    let opposingType = opposingPokeData.data.types[0].type.name
    console.log(opposingPokeData);
    console.log(opposingSprite);
  } catch (err) {
    console.error(err);
  }
}
randomPokemon(Math.floor(Math.random() * 898) + 1)
