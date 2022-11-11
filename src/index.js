import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './Containers/Login'
import StyledGlobal from './styled/styledGlobal'

const root =
ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StyledGlobal/>
    <Login />
  </React.StrictMode>
)
