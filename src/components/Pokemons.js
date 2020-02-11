import React, { useState, useEffect } from 'react'

import { sortUp } from 'utils/utils'

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch('https://pokedex-cislowski.herokuapp.com/poke')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(sortUp(data, 'pokemonNo'))
      })
  }, [])

  const imagesName = (number) => {
    if (number < 10) {
      return `/img/thumbnails/00${number}.png`
    } else if (number < 100) {
      return `/img/thumbnails/0${number}.png`
    } else {
      return `/img/thumbnails/${number}.png`
    }
  }

  return (
    <div>
      {pokemons.map((e) => (<div><img src={imagesName(e.pokemonNo)} alt={e.name} />{e.pokemonNo}-{e.name}</div>))}
    </div>
  )
}