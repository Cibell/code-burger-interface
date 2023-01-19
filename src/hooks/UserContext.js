import React, { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  // Dentro do provider, eu preciso retornar o que eu quero deixar disponível para toda minha aplicação
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfo) => {
    setUserData(userInfo)

    await localStorage.setItem('coderburger:userDate', JSON.stringify(userInfo))
  }
  return (
    <UserContext.Provider value={{ putUserData, userData }}>{children}</UserContext.Provider> // como props eu passo o que eu quero que fique disponível {o que colocar dentro do velue fica disponível} (value{{props}})
  )
}

// userContext ele é quem disponibilizar os dados para toda aplicação
export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
//  quando children é do Context o propTypes é do tipo node
