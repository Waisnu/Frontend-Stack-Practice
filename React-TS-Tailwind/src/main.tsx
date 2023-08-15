import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import LoginForm from './loginform.tsx'
import Navbar from './navbar.tsx'
import Footer from './footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <LoginForm />
    <Footer/>
    
  </React.StrictMode>,
)
