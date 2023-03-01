import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DesignProvider } from './contexts/design'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DesignProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DesignProvider>
)
