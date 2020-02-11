import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { PokemonCard } from 'components/PokemonCard'

import { sortUp } from 'utils/utils'

const Main = styled.main`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch('https://pokedex-cislowski.herokuapp.com/poke')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(sortUp(data, 'pokemonNo'))
      })
  }, [])

  return (
    <Main>
      {pokemons.map((e) => (
        <PokemonCard name={e.name} number={e.pokemonNo} key={e.pokemonNo} />
      ))}
    </Main>
  )
}

