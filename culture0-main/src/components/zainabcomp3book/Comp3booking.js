import React from 'react';
import  Backimg from "../zainabcompones/Backimg";
import  Header from "../Header/Header";
import Footer from "../Footer/Footer"
import About  from "../About/About"
import Comp3bookingcard from "./Comp3bookingcard"
import Comp3data from "./Comp3data"
const NewPage3 = () => {
    return (
      <div>
          <div className="ZComo3bookpage">
              <Header />
              <Backimg />
              <Comp3data/>
              <Comp3bookingcard/>
              <About/>

              <Footer/>
            
    </div>
      </div>
    );
  };
  
  export default NewPage3; 