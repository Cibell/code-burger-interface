import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './Containers/Login'
import Register from './Containers/Register'
import { UserProvider } from './hooks/UserContext'
import StyledGlobal from './styled/styledGlobal'

// preciso colocar o UserProvaide em volta de tudos os componentes que eu consigo recuperar os dados
const root =
ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
    <Login/>
    </UserProvider>
    <StyledGlobal/>
    <ToastContainer autoClose={2000} />
  </React.StrictMode>
)
