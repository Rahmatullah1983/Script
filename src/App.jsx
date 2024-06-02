import React from 'react'
import Navbar from './componants/Navbar/Navbar'
import Hero from './componants/Hero/Hero'
import Products from './componants/Products/Products'
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



    </div>
  )
}

export default App
