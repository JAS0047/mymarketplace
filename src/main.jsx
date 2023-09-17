import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Jewelry from './pages/Jewelry/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Jewelry/>
    <Footer/>
  </React.StrictMode>,
)
