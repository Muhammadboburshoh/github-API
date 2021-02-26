import './Home.css'
import DataFetch from "../../DataFetch/DataFetch"


function Home() {

  return (
    <div className="continer">
      <h1 className="site-heading">GitHub Users!</h1>
      <DataFetch />
    </div>
  )
}

export default Home
