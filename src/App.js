import './index.css';
import Header from './components/Header';
import Product from './components/Product';
import Testimonial from './components/Testimonial';
import Choice from './components/Choice';
import Look from './components/Look';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';

function App() {
  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <>
      <Header />
      <div className="wrapper">
        <Product isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <Testimonial />
        <Choice />
        <Look />
        <div className="place-order">
          <h1>₹13,999</h1>
          <button>PLACE ORDER</button>
        </div>
      </div>
    </>
  );
}

export default App;
