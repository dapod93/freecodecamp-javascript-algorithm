const pokemonID = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const clearDom = () => {
  const sprite = document.getElementById("sprite");
  if (sprite) sprite.remove();

  pokemonID.innerText = "";
  pokemonName.innerText = "";

  height.innerText = "";
  weight.innerText = "";

  types.innerText = "";
  hp.innerText = "";
  attack.innerText = "";
  defense.innerText = "";
  specialAttack.innerText = "";
  specialDefense.innerText = "";
  speed.innerText = "";
};

document.getElementById("search-button").addEventListener("click", async () => {
  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${document.getElementById("search-input").value.trim().toLowerCase()}`);
    const responseData = await response.json();

    pokemonID.innerText = `#${responseData.id}`;
    pokemonName.innerText = `${responseData.name.toUpperCase()}`;

    height.innerText = `Height: ${responseData.height}`;
    weight.innerText = `Weight: ${responseData.weight}`;

    document.getElementById("sprite-container").innerHTML = `<img id="sprite" src="${responseData.sprites.front_default}" alt="${responseData.name} front default sprite">`;

    types.innerHTML = responseData.types.map((obj) => `<span class="type ${obj.type.name}">${obj.type.name.toUpperCase()}</span>`).join("");
    hp.innerText = responseData.stats[0].base_stat;
    attack.innerText = responseData.stats[1].base_stat;
    defense.innerText = responseData.stats[2].base_stat;
    specialAttack.innerText = responseData.stats[3].base_stat;
    specialDefense.innerText = responseData.stats[4].base_stat;
    speed.innerText = responseData.stats[5].base_stat;
  } catch (err) {
    clearDom();
    alert("Pokémon not found");
  }
});
