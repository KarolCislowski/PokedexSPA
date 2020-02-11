import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Pokemons } from 'components/Pokemons'
import { Detail } from 'components/Detail'
import { Header } from 'components/Header'

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Pokemons />
          </Route>
          <Route path="/:pokemonName">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
