import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./DataFitch.css"
function DataFetch() {

  const usersLogin = [
    "muhammadboburshoh", "omon490", "abduqodirov", "anvarnarz", "mannonov", "muhammadyunusuz", "abdulatifkhan"
  ]

  const [data, setData] = useState({
    loading: true,
    error: null,
    users: []
  })



  useEffect(() => {
    let allUsers = []

    usersLogin.forEach((userLogin, index) => {

      fetch(`https://api.github.com/users/${userLogin}`)
        .then(res => res.json())
        .then(user => {

          allUsers.push(user)
          if (index === usersLogin.length - 1) {
            setData({ loading: false, users: allUsers})
          }
        })
        .catch(error => {
          setData({ error: "APIda xatolik bor." })
        })

    })

  }, [])


  console.log(data.users);

  return (
    <>
      <ul className="users">
        {data.loading && <mark>Loading...</mark>}
        {data.error && <>{data.error}</>}
        {
          !data.loading && data.users.map(user => {
            
            return(
              <li key={user.id} className="user">
                <Link to={user.login} className="user-link">
                  <img src={user.avatar_url} width="200" height="200" alt={user.login} className="user-img"/>
                  <p className="user-name">{user.name}</p>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default DataFetch