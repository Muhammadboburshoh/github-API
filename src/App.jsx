import './App.css'
import DataFetch from "./Componints/DataFetch/DataFitch"

function App() {

  /* fetch("http://jsonplaceholder.typicode.com/posts")
  .then(response => {
    return response.json()
  })
  .then(data =>{
    console.log(data);
  }) */


  return (
    <>
      <DataFetch />
    </>
  )
}

export default App
