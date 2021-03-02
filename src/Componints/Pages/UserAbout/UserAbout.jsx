import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./UserAbout.css"

function UserAbout () {

  const { user } = useParams()

  const [ userData, setUserData ] = useState({ loading: true, error: null, data: {}, })

  useEffect(() => {

    ;(async () => {

      const response = await fetch(`https://api.github.com/users/${user}`)
      const data = await response.json()

			if (Object.keys(data).length) {
        setUserData({ loading: false, data: data})
			}
			else {
        setUserData({ loading: false, error: true, data: null})
			}
    })()
  }, [user])

  return (
    <>
      <div className="user-container">
        <div className="user-about">
          {
            userData.loader && <h1>Loading</h1>
          }
          {
            !userData.loader && !userData.error &&
            <div className="data">
                <img width="300" height="300" className="user__img" src={userData.data.avatar_url} alt={userData.data.login}/>
                <h1 className="user__name">{userData.data.name}</h1>
                {
                  userData.data.bio && <p><b> User about: </b>{userData.data.bio}</p>
                }

                {
                  userData.data.location && <p><b>Yashash joyi: </b>{userData.data.location}</p>
                }

                {
                  userData.data.company && <p><b>Ishlash joyi: </b>{userData.data.company}</p>
                }
              </div>
            
          }

          <Link className="back-link" to="/">Back</Link>
        </div>
      </div>
    </>
  )
}

export default UserAbout