import React from 'react'
import Navbar from './componants/Navbar/Navbar'
import Hero from './componants/Hero/Hero'
import Products from './componants/Products/Products'
import TopProducts from './componants/TopProducts/TopProducts'
import Banner from "./componants/Banner/Banner"
import AOS from 'aos';
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />


    </div>
  )
}

export default App
