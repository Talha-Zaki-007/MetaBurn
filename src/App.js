import './App.css';
import Header from './components/header/header';
import Tokonomics from './components/tokonomics/tokonomics';
import BurnCoin from './components/burnCoin/burnCoin';
import Roadmap from './components/roadmap/roadmap';
import Memes from './components/memes/memes';
import CarouselBurn from './components/carouselBurn/carouselBurn';
import AuditReport from './components/auditReport/auditReport';
import Footer from './components/footer/footer';
import Robots from './components/robots/robots';
import OurPartners from './components/ourPartners/ourPartners'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { BrowserRouter, Route } from 'react-browser-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Scroll from './components/scroll/scroll';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Tokonomics />
                <BurnCoin />
                <Roadmap />

              </>
            }
          />
        </Routes>

        <Scroll />
        <Memes />
        <CarouselBurn />
        <AuditReport/>
        <OurPartners />      
        <Routes>
          <Route path='/' element={
            <>
              <Robots />
            </>
          }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
