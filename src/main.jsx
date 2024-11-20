import { createRoot } from 'react-dom/client'
import './index.css'

// import { RouterProvider } from 'react-router-dom'
// import router from './router/routes.jsx'
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'
import App from './App.jsx'
// import { ReactDOM } from 'react'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)