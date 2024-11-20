import React from 'react';
import  Backimg from "../zainabcompones/Backimg";
import  Header from "../Header/Header";
import About  from "../About/About"
import Datacomp from "./Datacomp"
import Footer from "../Footer/Footer"
import Bookingcard from './Comp1Bookingcard';
function Como1Bookpage() {
  return (
    <div className="ZComo1Bookpage">
      <Header />
      <Backimg />
     <Datacomp/>
     <Bookingcard/>
     <About/>
     <Footer/>


    </div>
  );
}
export default Como1Bookpage;
