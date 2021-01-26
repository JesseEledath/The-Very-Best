# The-Very-Best.

## Project Description

I will attempt to make a rock paper scissors game using pokemone types, but you're shown what the oponent will chose.

## API and Data Sample

Using 2 endpoints of the PokemonAPI, the [types](https://pokeapi.co/docs/v2#types) and [pokemon](https://pokeapi.co/docs/v2#pokemon) ones.

 ` "id": 5,
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
   ],`

## Wireframes

https://wireframe.cc/bydHV9 

![WireFrame for Mobile Design](https://i.imgur.com/CABXdcO.png)

#### MVP 

- Have user input for player name displayed. 
- Have randomly selected opposing pokemon's image rendered and data + typing data pulled from API. 
- Have user select a pokemon and pull that Type information and render the corresponding image.
- Have a comparison between type data of user selcted pokemon and opposing pokemon.
- Keep track of and display amount of wins and losses based on comparision outcomes.

#### PostMVP  

- Add some background battle music.
- Add/change text to explain why they lost or won due to their pokemon selction.
- Add dynamic health-bars to the pokemon to indicate which one one and loss by depletion.

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval and PseudoCoding | Incomplete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Initial Clickable Model  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating Structure | H | 4hrs| |
| Core Aplacation | H | 15hrs| |
| Working with API | H | 4hrs| |
| Debugging | H | 4hrs| |
| Post MVP + Research | H | 7hrs| |
| Total | H | 34hrs| |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
