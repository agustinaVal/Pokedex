let pokemones = [];

function BuscarPokemon() {
  let id = $("#id").val();
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  $.ajax({
    url,
    success: function (result) {
      let pokemon = {
        pokedex: result.id,
        nombre: result.name,
        ataque: result.stats[1].base_stat,
        hp: result.stats[0].base_stat,
        defensa: result.stats[2].base_stat,
        velocidad: result.stats[5].base_stat,
        imagen: result.sprites.front_default,
      };
      pokemones.push(pokemon);
      $("#Cuerpo").html("");
      pokemones.forEach((p, i) => {
        $("#Cuerpo").append(`
        <ul class="list-group">
  <li class="list-group-item">Pokemon!</li>

  
  <li class="list-group-item list-group-item-primary">ID ${i + 1}</li>
  <li class="list-group-item list-group-item-secondary"> Pokedex ${p.pokedex}</li>
  <li class="list-group-item list-group-item-success"> Nombre ${p.nombre}</li>
  <li class="list-group-item list-group-item-danger"> Ataque ${p.ataque}</li>
  <li class="list-group-item list-group-item-warning"> HP ${p.hp}</li>
  <li class="list-group-item list-group-item-info"> Defensa${p.defensa}</li>
  <li class="list-group-item list-group-item-light"> Velocidad ${p.velocidad}</li>
  <th scope="row"><img src="${p.imagen}" class="card-img-top" ></img></th>
</ul>
        
        `);
      });
    },
  });
}
