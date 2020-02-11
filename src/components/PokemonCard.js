import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { imagesName } from 'utils/utils'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px;
  text-align: center;
  border: 2px solid steelblue;
  border-radius: 20px;
  flex-grow:none;
  margin: 15px;
  cursor: pointer;
  text-decoration: none;
`

export const PokemonCard = ({ number, name }) => {

  return (
    <Link to={`/${name}`}>
      <Card>
        <img src={imagesName('thumbnails', number)} alt={name} />
        <h4>{name}</h4>
      </Card>
    </Link>
  )
}