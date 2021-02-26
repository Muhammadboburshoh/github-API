import { useUser } from "../../Context/UserContext"
import "./UserAbout.css"

function UserAbout () {

  const [ userA ] = useUser()

  return (
    <>
      <div className="user-container">
        <div className="user-about">
          <img width="300" height="300" className="user__img" src={userA.avatar_url} alt={userA.login}/>
          <h1 className="user__name">{userA.name}</h1>
          {
            userA.bio && <p><b> User about: </b>{userA.bio}</p>
          }
          {
            userA.location && <p><b>Yashash joyi: </b>{userA.location}</p>
          }
        </div>
      </div>
    </>
  )
}

export default UserAbout