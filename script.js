let nameSubmit = document.getElementById('user-name')
// console.log(nameSubmit);
nameSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById('user-name').style.display = "none"
  document.getElementById('user-pokemon-name').style.display = "block"
  // https://stackoverflow.com/questions/11226489/show-hide-forms-using-buttons-and-javascript
});

// Api call(math.random 1118 total) to get opposing pokemon sprite, and set a varible of the type
// appened and display opposing sprite
async function randomPokemon(num) {
  try {
    const opposingPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    let opposingNameData = opposingPokeData.data.name
    let opposingSpriteData = opposingPokeData.data.sprites.front_default
    let opposingTypeData = opposingPokeData.data.types[0].type.name
    // console.log(opposingNameData);
    // console.log(opposingSpriteData);
    let opposingPokemonName = document.getElementsByClassName('opposing-pokemon-name');
    opposingPokemonName = opposingNameData
    let opposingSprite = document.getElementById('opposing-pokemon-sprite');
    opposingSprite.src = opposingSpriteData
    return opposingTypeData
  } catch (err) {
    alert(err, 'Try spell-checking your pokemon');
  }
}
randomPokemon(Math.floor(Math.random() * 898) + 1)

let pokemonSubmit = document.getElementById('user-pokemon-name')
pokemonSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let pokemonNameInput = document.getElementById('user-pokemon').value
  UserPokemon(pokemonNameInput.toLowerCase())
});

async function UserPokemon(input) {
  try {
    const userPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}/`)
    let userNameData = userPokeData.data.name
    let userSpriteData = userPokeData.data.sprites.back_default
    let userTypeData = userPokeData.data.types[0].type.url
    let userPokemonName = document.getElementsByClassName('user-pokemon-name');
    userPokemonName.p = userNameData
    let userSprite = document.getElementById('user-pokemon-sprite')
    userSprite.src = userSpriteData
    return userTypeData
  } catch (err) {
    alert(err, 'Try spell-checking your pokemon');
  }
}