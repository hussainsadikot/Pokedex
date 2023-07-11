import React from "react";
import { useState } from "react";
import Axios from "axios";




// export default class Search extends Component {
  
//   render() {
//     return (
//       <div className='SearchBox'>
//         <h1>Search Pokemon</h1>
//         <input type= "text" placeholder='Type Name..'></input>
//         <button >Search Pokemon</button>
//         </div>

//     )
//   }
// }
const Search = () => {
  const [pokemonName, setPokemonName]=useState("");
  const [error, setError]=useState("");
  const [pokemonChoosen, setPokemonChoosen]=useState(false)
  const [pokemon,setPokemon]=useState({ name:"",species:"",img:"",
    hp:"",
    attack:"",
    defense:"",
    type:"",})
  const searchPokemon=()=>
  {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response)=>
    {
      console.log(response);
      setPokemon({
        name:pokemonName,species:response.data.species.name,img:response.data.sprites.front_default,
        hp:response.data.stats[0].base_stat,
        attack:response.data.stats[1].base_stat,
        defense:response.data.stats[2].base_stat,
        type:response.data.types[0].type.name,
      });
      setPokemonChoosen(true)
      // axios.post('/dispaly_details', {
      //   response
      // });
    }).catch(error=>{
      console.log(error.response.data)
      setError(error.message);
    })
  }
  console.log(typeof error);
    return (
       <>
        <div className='SearchBox'>
        <h1>Search Pokemon</h1>
        <input type= "text"
        onChange={(event)=>{
          setPokemonName(event.target.value)
        }}
        placeholder='Type Name..'></input>
        
        <button onClick={searchPokemon} >Search Pokemon</button>
        </div>
        <div className='display'>{!pokemonChoosen?(<h1>Please Search Pokemon</h1>):
        (
          <>
          <h1>{pokemonName}</h1>
          <img src={pokemon.img}/>
          <h1>Species:{pokemon.species}</h1>
          <h1>Type:{pokemon.type}</h1>
          <h1>Hp:{pokemon.hp}</h1>
          <h1>Attack:{pokemon.attack}</h1>
          <h1>Defense:{pokemon.defense}</h1>

          </>
        )}
        <p>{error}</p>
        </div>
       </>
              
      );
}
 
export default Search;