// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



// import About from './pages/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <template>
      <div>
        <router-link to="/">
          Homepage
        </router-link>

        <router-link to="/About">
          About
        </router-link>

        <router-link to="/Basket">
          Basket
        </router-link>

        <router-link to="/Campaigns">
          Campaigns
        </router-link>

        <router-link to="/ContactUs">
          ContactUs
        </router-link>

        <router-link to="/Jewelry">
          Jewelry
        </router-link>

        <router-link to="/Press">
          Press
        </router-link>

        <router-link to="/ProductPage">
          ProductPage
        </router-link>

        <router-link to="/Search">
          Search
        </router-link>

        <router-link to="/Stocklist">
          Stocklist
        </router-link>

        <router-link to="/Values">
          Values
        </router-link>

        <router-view />

      </div>

    </template>
  )
}

export default App
