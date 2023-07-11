

import Navbar from './Navbar'
// import Search from './Components/Search';
import { useState } from "react";
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Axios from "axios";
import Search from './Components/Search';
import List from './Components/List';
import Home from './Components/Home';
import Card from './Components/Card';
// import axios from 'axios';
// import List from './Components/List';

function App() {

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
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
       
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route  path="/list"><List/></Route>
          <Route  path="/search"><Search/></Route>
          <Route  path="/card/:name"><Card/></Route>
        </Switch>
        {/* <Card/> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
