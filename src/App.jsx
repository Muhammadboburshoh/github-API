import { Switch, Route } from "react-router-dom"
import './App.css'
import Home from "./Componints/Pages/Home/Home"
import UserAbout from "./Componints/Pages/UserAbout/UserAbout"


function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path={`/:user`} >
          <UserAbout />
        </Route>
      </Switch>
    </>
  )
}

export default App
