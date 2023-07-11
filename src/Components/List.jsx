import React from 'react'
import Card from './Card'

import { useState, useEffect } from "react";
import Axios from "axios";

export default function List() {
    useEffect(() => {
        searchPokemon();
    }, []);
    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log('Fetch more list items!');
        searchPokemon()

    }
    useEffect(() => {

    }, []);

    const [pokemonOffset, setOffset] = useState(0);
    const [pokemonLimit, setLimit] = useState(10);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");
    const [pokemonChoosen, setPokemonChoosen] = useState(false)

    const [nextPokemons, loadNextPokemon] = useState(true);
    const [pokemonName, setPokemonName] = useState([]);

    const [pokemon, setPokemon] = useState({
        name: "", species: "", img: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
    })



    useEffect(() => {
        // setLimit(pokemonLimit+10)
        // if(pokemonOffset%10===10){

        // setLimit(pokemonLimit+10)

        // searchPokemon()

        // }
        // searchPokemon()
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [pokemonName, pokemonOffset, pokemonLimit]);

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}&offset=${pokemonOffset}`).then(
            (response) => {
                setPokemonName(response.data.results)
                console.log(response.data.results)
                response.data.results.map((object) => {

                    //  arr= [...object.names]
                    setLimit(pokemonLimit + 10)

                    return console.log(object.name)

                    // getPokemon()

                    // return setPokemonName(object.results)
                })
                console.log("are you coming")

                setPokemonChoosen(true)
                // axios.post('/dispaly_details', {
                //   response
                // });
            }).catch(error => {
                // console.log(error.response.data)
                setError(error.message);
            })
    }

    return (
        <>

            <div className='container'>

                <div className='list'>
                    {
                        pokemonChoosen ? pokemonName.map((names) => (<div key={pokemonName.url}>
                            <h2>{names.name}</h2>
                        </div>)) : <p>Loading</p>

                    }
                    <button onClick={searchPokemon} >list</button>



                </div>



            </div>
        </>



    )


}
