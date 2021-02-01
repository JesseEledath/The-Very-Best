# The-Very-Best.

## Project Description

The-Very-Best is a rock paper scissors game using pokemone types, but you're shown what the oponent will chose.
Example: A grass type pokemon would beat a water type pokemon.

## API and Data Sample

Using 2 endpoints of the PokemonAPI, the [types](https://pokeapi.co/docs/v2#types) and [pokemon](https://pokeapi.co/docs/v2#pokemon) ones.
```

  "id": 5,
   "name": "ground",
    "damage_relations": {
     "no_damage_to": [
       {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
     ],
      "half_damage_to": [
       {
         "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
   ]`

```
## Wireframes

https://wireframe.cc/bydHV9 

![WireFrame for Mobile Design](https://i.imgur.com/CABXdcO.png)

#### MVP 

- Display user name from user input. 
- Randomly generate opposing pokemon. 
- User select a pokemon to battle opposing pokemon.
- Display winner based on pokemon type comparison.


#### PostMVP  

- Add some background battle music.
- Display pokemon win/loss condtions for this match.
- Add replay button
- Keep track of and display amount of wins and losses based on comparision outcomes.

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Completed
|Jan 26| Project Approval and PseudoCoding | Completed
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Completed
|Jan 29| Initial Clickable Model  | Completed
|Jan 30| MVP | Completed
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

![Time and importance graph](https://github.com/Rehack65/The-Very-Best/blob/main/priority.png?raw=true)

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Boilerplate HTML and CSS | H | 2hrs| 1hr |
| Take user input and display name | H | 3hrs| 3hrs|
| Take user input to select pokemon | H | 3hrs| 3hrs|
| Randomly generate opposing pokemon | H | 3hrs| 2hrs|
| Display/layout pokemon sprites | H | 3hrs| 4hrs|
| Get type match up data for each pokemon | H | 3hrs| 3hrs|
| Create win conditions for battle | H | 3hrs| 3hrs|
| Display winner from battle | H | 3hrs| 5hrs |
| Request API (for each pokemon) to get name and sprite data | H | 3hrs| 4hrs|
| Request API (for each pokemon) to get type match up data | H | 3hrs| 3hrs|
| Background and format styling | H | 3hrs|3hrs |
| Debugging | H | 4hrs| 2hrs|
| Post MVP + Research | H | 7hrs| |
| Total | H | 34hrs| 36Hrs |

## Code Snippet
```
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
});`
```
## Change Log
 
