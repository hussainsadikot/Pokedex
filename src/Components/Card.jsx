import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

// const Card = ({ pokemon, loading,infoPokemon}) => {
//     // console.log(pokemon);
//      return (
//          <>
//          {
//              loading ? <h1>Loading...</h1> :
//                  pokemon.map((item) => {
//                      return (
//                          <>
//                              <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
//                                  <h2>{item.id}</h2>
//                                  <img src={item.sprites.front_default} alt="" />
//                                  <h2>{item.name}</h2>
//                                   <h2>Charmander{}</h2>
                                //  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
                                //  <h2>Species:{item.species</h2>
                                //  <h2>Type:{item.type}:</h2>
                                //  <h2>Hp:{item.hp}</h2>
                                //  <h2>Attack:{item.attack}</h2>
                                //  <h2>Defense: {item.defense}</h2>
//                              </div>
//                          </>
//                      )
//                  })
//          }
 
//          </>
//      )
//  }
//  export default Card;
const Card = () => {
    // console.log(pokemon);
     return (
         <>
         
            
                                   <>
                             <div className="card" >
                                 <h2>Charmander{}</h2>
                                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
                                 <h2>Species:</h2>
                                 <h2>Type:</h2>
                                 <h2>Hp:</h2>
                                 <h2>Attack: </h2>
                                 <h2>Defence: </h2>
                                 <button>Bookmark</button>

                            </div>
                         </>
                     
        
 
         </>

     
)}
 export default Card;
