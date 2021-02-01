// Getting random Pokemon information and appeneding sprite/name/type ====================
async function randomPokemon(num) {
  try {
    const opposingPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    let opposingNameData = opposingPokeData.data.name
    let opposingSpriteData = opposingPokeData.data.sprites.front_default
    let opposingTypeData = opposingPokeData.data.types[0].type.name
    let opposingPokemonName = document.getElementById('opposing-pokemon-name');
    // Formatting name so its first letter is uppercase =================================
    opposingPokemonName.append(opposingNameData.charAt(0).toUpperCase() + opposingNameData.slice(1))
    opposingPokemonName.append(` ${opposingTypeData}` + ' type')
    let opposingSprite = document.getElementById('opposing-pokemon-sprite');
    opposingSprite.src = opposingSpriteData

  } catch (err) {
    console.log(err);
    alert('Try spell-checking your pokemon');
  }
}

// Evoking random Pokemon ===============================================================
randomPokemon(Math.floor(Math.random() * 898) + 1)

// Getting User name submittion and adding event listener ===============================
let nameSubmit = document.getElementById('user-name')
nameSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let userName = document.getElementById('name').value
  // Replacing the username form with the user Pokemon form =============================
  document.getElementById('user-name').style.display = "none"
  document.getElementById('user-pokemon-name').style.display = "block"
  let battleText = document.getElementById('battle-text1')
  battleText.innerText = `Welcome ${userName}. Team rocket has stolen all Pokemon's second typing!`
});

// Getting user Pokemon submition and adding event listener for form ===============
let pokemonSubmit = document.getElementById('user-pokemon-name')
pokemonSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let pokemonNameInput = document.getElementById('user-pokemon').value
  UserPokemon(pokemonNameInput.toLowerCase())
  document.getElementById('replay-button').style.display = "block"
  document.getElementById('user-pokemon-sprite').style.display = "block"
});

// Adding the last event listener to replay the game and reset some values ========================
let replayButton = document.getElementById('replay-button')
replayButton.addEventListener('click', function (e) {
  document.getElementById('opposing-pokemon-name').innerText = ''
  document.getElementById('user-pokemon').value = ''
  document.getElementById('user-pokemon-sprite').style.display = "none"
  randomPokemon(Math.floor(Math.random() * 898) + 1)
})

// Getting user input Pokemon sprite and type data
async function UserPokemon(input) {
  try {
    const userPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}/`)
    let userSpriteData = userPokeData.data.sprites.back_default
    let userTypeData = userPokeData.data.types[0].type.url
    let userSprite = document.getElementById('user-pokemon-sprite')
    userSprite.src = userSpriteData
    // Main comparison between user Pokemon type and super effectiveness vs opposing Pokemon typing
    async function Compare() {
      try {
        const typeTable = await axios.get(`${userTypeData}`)
        let winCondition = typeTable.data.damage_relations.double_damage_to
        let opposingPokemonName = document.getElementById('opposing-pokemon-name').innerText;
        let opposingPokeType = opposingPokemonName.split(" ")[1]
        // Setting and running win condition
        for (let i = 0; i <= winCondition.length; i++) {
          let WinIndex = winCondition[i];
          if (WinIndex.name === opposingPokeType) {
             setTimeout(() => {  alert('You\'ve Won!'); }, 600)
            return;
          }
        }
      } catch (err) {
        console.log(err)
        setTimeout(() => { alert('You\'ve lost...'); }, 600)
        return;
      }
    }
    Compare()
  } catch (err) {
    console.log(err);
    alert('Try spell-checking your pokemon');
  }
}