# PokemonTrainer

Pokemon Trainer app made with angular. We have a login page with a guard that ensures only the login page will be visible if the user has given a name.
After the user inputs a name, we check the Noroff-api if there is already a user in the api with that name, in which case subsequent pokemon collection will
be added to this user. If there is not a user by that name on the api, we make a new user, so that pokemons can be added here.

On the pokemon page, we have a catalouge, which displays 20 pokemons per page and in total there are 50 pages, so that in total there are 1008 pokemon.
We get the pokemon from the PokeApi. On this page a user is able to collect a pokemon by clicking on a star icon and it will be added in the api to the useres list of collected pokemon and displayed on the profile page.

The profile page display the list of all collected pokemon for a given logged in user.
