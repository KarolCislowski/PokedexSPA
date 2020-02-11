import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Pokemons } from 'components/Pokemons'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Pokemons />
        </Route>
      </Switch>
    </Router>
  )
}
