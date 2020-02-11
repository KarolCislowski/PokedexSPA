import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { imagesName } from 'utils/utils'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`

const Stats = styled.article`
  margin: 20px auto;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
  display:flex;
  justify-content: space-between;
`

const StatName = styled.span`
  font-weight: 800;
`

const StatParam = styled.span`
  font-weight: 500;
`

export const Detail = () => {
  const [pokemon, setPokemon] = useState()
  const [types, setType] = useState()
  const { pokemonName } = useParams()

  useEffect(() => {
    fetch(`https://pokedex-cislowski.herokuapp.com/poke/${pokemonName}`)
      .then((res) => (res.json()))
      .then((json) => {
        setPokemon(json)
      })
  }, [pokemonName])

  useEffect(() => {
    (fetch('https://pokedex-cislowski.herokuapp.com/types')
      .then((res) => (res.json()))
      .then((json) => { setType(json) }))
  }, [pokemonName])

  const bg = () => {
    if (pokemon.type.length === 1) {
      return types.filter((e) => e.type === pokemon.type[0])[0].color
    } else {
      return `linear-gradient(50deg, ${types.filter((e) => e.type === pokemon.type[0])[0].color} 0%, ${types.filter((e) => e.type === pokemon.type[0])[0].color} 40%, ${types.filter((e) => e.type === pokemon.type[1])[0].color}60%, ${types.filter((e) => e.type === pokemon.type[1])[0].color} 100%)`
    }
  }

  return (
    <>
      {(pokemon && types) &&
        <Main style={{ background: `${bg()}` }}>
          <img src={imagesName('pokemons', pokemon.pokemonNo)} alt={pokemon.name} />
          <Stats>
            <h1>{pokemon.name}</h1>
            <List>
              <Item><StatName>Number:</StatName><StatParam>{pokemon.pokemonNo}</StatParam></Item>
              <Item>
                <StatName>Type:</StatName>
                <StatParam>
                  {pokemon.type.map((e, index, arr) => <>{(index + 1) < arr.length ? `${e}, ` : `${e}`}</>)}
                </StatParam>
              </Item>
              <Item><StatName>HP:</StatName><StatParam>{pokemon.HP}</StatParam></Item>
              <Item><StatName>Attack:</StatName><StatParam>{pokemon.Attack}</StatParam></Item>
              <Item><StatName>Defense:</StatName><StatParam>{pokemon.Defense}</StatParam></Item>
              <Item><StatName>Special Attack:</StatName><StatParam>{pokemon.SpAttack}</StatParam></Item>
              <Item><StatName>Special Defense:</StatName><StatParam>{pokemon.SpDefense}</StatParam></Item>
              <Item><StatName>Speed:</StatName><StatParam>{pokemon.Speed}</StatParam></Item>
            </List>
          </Stats>
        </Main>}
    </>
  )
}