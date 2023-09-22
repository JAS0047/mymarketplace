import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.vue'
import './index.css'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import router from './router.js'
// import Basket from './pages/Basket'
// import Campaigns from './pages/Campaigns'
// import Stocklist from './pages/Stocklist'
// import ContactUs from './pages/ContactUs'
// import Jewelry from './pages/Jewelry/index.jsx'
// import ProductPage from './pages/ProductPage/index.jsx'
// import About from './pages/About/index.jsx'
// import Values from './pages/Values'
import { createApp } from 'vue'
import { Router } from 'react-router-dom'

const app = createApp(App)

app.use(router)

app.mount("#app")

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Header />
//     <App />
//     {/* <Jewelry/> */}
//     {/* <ProductPage/> */}
//     {/* <About /> */}
//     {/* <Values /> */}
//     {/* <ContactUs /> */}
//     {/* <Stocklist /> */}
//     {/* <Campaigns /> */}
//     {/* <Basket /> */}


//     <Footer />
//   </React.StrictMode>,
// )
