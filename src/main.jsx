import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
// import Jewelry from './pages/Jewelry/index.jsx'
// import ProductPage from './pages/ProductPage/index.jsx'
// import About from './pages/About/index.jsx'
import Values from './pages/Values'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <App /> */}
    {/* <Jewelry/> */}
    {/* <ProductPage/> */}
    {/* <About /> */}
    <Values />
    <Footer />
  </React.StrictMode>,
)
