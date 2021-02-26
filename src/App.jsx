import './App.css'
import Home from "./Componints/Pages/Home/Home"
import { useUser } from "./Componints/Context/UserContext"


function App() {

  const [ userA ] = useUser()
  console.log(userA);

  return (
    <>
      <Home />
    </>
  )
}

export default App
