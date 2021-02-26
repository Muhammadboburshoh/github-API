import { createContext, useState, useContext } from "react"

const UserContext = createContext()

function UserProvider ({children}) {

  const [userA, setUserA] = useState("abd")

  return (
    <UserContext.Provider value={{ userA, setUserA }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser () {

  const { userA, setUserA } = useContext(UserContext)
  return [userA, setUserA]

}

export{
  UserProvider,
  useUser,
}