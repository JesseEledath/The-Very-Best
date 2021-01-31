let nameSubmit = document.getElementById('user-name')
// console.log(nameSubmit);
nameSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let userName = document.getElementById('name').value
  document.getElementById('user-name').style.display = "none"
  document.getElementById('user-pokemon-name').style.display = "block"
  let battleText = document.getElementById('battle-text1')
  battleText.innerText = `Welcome ${userName}. Team rocket has stolen all Pokemon's second typing!` 
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
    let opposingPokemonName = document.getElementById('opposing-pokemon-name');
    opposingPokemonName.append(opposingNameData.charAt(0).toUpperCase() + opposingNameData.slice(1))
    opposingPokemonName.append(` ${opposingTypeData}` + ' type')
    let opposingSprite = document.getElementById('opposing-pokemon-sprite');
    opposingSprite.src = opposingSpriteData

  } catch (err) {
    console.log(err);
    alert('Try spell-checking your pokemon');
  }
}
randomPokemon(Math.floor(Math.random() * 898) + 1)
// console.log(opposingTypeData);
let pokemonSubmit = document.getElementById('user-pokemon-name')
pokemonSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let pokemonNameInput = document.getElementById('user-pokemon').value
  UserPokemon(pokemonNameInput.toLowerCase())
  document.getElementById('user-pokemon-sprite').style.display = "block"
});

async function UserPokemon(input) {
  try {
    const userPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}/`)
    let userNameData = input.charAt(0).toUpperCase() + input.slice(1)
    let userSpriteData = userPokeData.data.sprites.back_default
    let userTypeData = userPokeData.data.types[0].type.url
    let userPokemonName = document.getElementsByClassName('user-pokemon-name');
    // userPokemonName.p = userNameData
    let userSprite = document.getElementById('user-pokemon-sprite')
    userSprite.src = userSpriteData
    async function Compare() {
     try {
       const typeTable = await axios.get(`${userTypeData}`)
       let winCondition = typeTable.data.damage_relations.double_damage_to
      //  console.log(winCondition);
      let opposingPokemonName = document.getElementById('opposing-pokemon-name').innerText;
      let opposingPokeType = opposingPokemonName.split(" ")[1]
       for (let i = 0; i <= winCondition.length; i++) {
         let WinIndex = winCondition[i];
         if (WinIndex.name === opposingPokeType) {
           alert('You\'ve Won!')
           return
         } 
       }
     } catch (err) {
       console.log(err)
         alert('You\'ve lost...');
     }
    }
    Compare()
    
  } catch (err) {
    console.log(err);
    alert('Try spell-checking your pokemon');
  }
}