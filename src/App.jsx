import React from 'react'
import Navbar from './componants/Navbar/Navbar'
import Hero from './componants/Hero/Hero'
import Products from './componants/Products/Products'
import TopProducts from './componants/TopProducts/TopProducts'
import Banner from "./componants/Banner/Banner"
import Subscribe from './componants/Subscribe/Subscribe'
import Testimonails from './componants/Testimonails/Testimonails'
import Footer from './componants/Footer/Footer'
import Popup from './componants/Popup/Popup'
import AOS from 'aos';
import "aos/dist/aos.css"


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => { setOrderPopup(!orderPopup) }
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
    <div className=' bg-white dark:bg-gray-900 dark:text-white
    duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />

      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonails />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
