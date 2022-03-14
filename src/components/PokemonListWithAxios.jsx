import React, { useState } from "react";
import axios from 'axios';

const PokemonListWithAxios = () => {

    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1126")
            .then((response) => {
                setPokemonList(response.data.results)
            })
    }

    return (
        <>
            <button className="btn btn-secondary mt-5" onClick={getPokemon}>Fetch Pokemon</button>
            <ul className="mt-4">
                {
                    pokemonList.map((pokemon, index) => {
                        return <li key={index}>{pokemon.name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default PokemonListWithAxios