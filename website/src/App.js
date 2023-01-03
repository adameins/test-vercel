import { ThemeProvider, createTheme } from '@mui/material/styles';


import './App.css';
import MenuContainer from './components/MenuContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FAQContainer from './components/FAQContainer';

import FoodSvg from './components/assets/FoodSvg.jsx';

const theme = createTheme({
  typography: {
    fontFamily: 'Circular Std Medium, Poppins, sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className='hero_container' id='home'>
        <Hero />
      </div>

      {/* Menu */}
      <h1 className='section_tittle' id='menu'>
        <FoodSvg /> <br/>
        <span>Our Menu</span>
      </h1>
      <div className='menu_container'>
        <MenuContainer />
      </div>

      {/* FAQ */}
      <h1 className='section_tittle' id='faq'>
        <FoodSvg /> <br/>
        <span>Frequently Asked Questions</span>
      </h1>
      <div className='faq_container'>
        <FAQContainer />
      </div>
      <br/>

      {/* Contact Us */}
      <div className='contact_container' id='contact'>
      <Footer />
      </div>
    </ThemeProvider>
  );
}
