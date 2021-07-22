import './App.css'

import { Route, Switch, Redirect } from 'wouter'

import Login from 'pages/Login'

export default function App () {
  return (
    <>
      <Redirect to="/login" />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </>
  )
}
