import { useEffect, useState } from "react"

function DataFetch () {

  const userslogin = [
    "muhammadboburshoh", "omon490",
  ] 
  
  const [data, setData] = useState([{
    loading: true,
    error: null, 
    users: [],
  }])

  


  useEffect(() => {


      fetch(`https://api.github.com/users`)
      .then(res => res.json())
      .then(user => {
        // console.log(user);
        setData({ loading: false, users: user})
      })
      .catch(error => {
        setData({error: "APIda xatolik bor."})
      })


  }, [])

  console.log(data.users);

  return (
    <>
      <ul>
        {
          
        }
      </ul>
    </>
  )
}

export default DataFetch