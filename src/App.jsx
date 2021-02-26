import { Switch, Route } from "react-router-dom"
import './App.css'
import Home from "./Componints/Pages/Home/Home"
import UserAbout from "./Componints/Pages/UserAbout/UserAbout"
import { useUser } from "./Componints/Context/UserContext"


function App() {

  const [ userA ] = useUser()

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path={`/${userA.login}`} >
          <UserAbout />
        </Route>
      </Switch>
    </>
  )
}

export default App
