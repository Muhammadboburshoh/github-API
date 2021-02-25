import { useEffect, useState } from "react"

function DataFetch () {

  const userslogin = [
    "muhammadboburshoh", "omon490",
  ] 
  
  const [data, setData] = useState({
    loading: true,
    error: null, 
    users: []
  })



  useEffect(() => {

    userslogin.forEach(userLogin => {

      fetch(`https://api.github.com/users/${userLogin}`)
      .then(res => res.json())
      .then(user => {

        console.log(user);
        setData({ loading: false, users: [...data.users, user]})
      })
      .catch(error => {
        setData({error: "APIda xatolik bor."})
      })

    })

  }, [])

  // console.log(data.users);

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