import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ContextProvider} from './context/Context.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ContextProvider>
  ,
)
