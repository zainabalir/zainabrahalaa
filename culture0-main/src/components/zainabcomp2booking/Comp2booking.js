import React from 'react';
import  Backimg from "../zainabcompones/Backimg";
import  Header from "../Header/Header";
import Footer from "../Footer/Footer"
import About  from "../About/About"
import Bookingcard from "./Comp2bookingcard"
import Datacomp2 from "./Comp2datacomp"
const NewPage2 = () => {
    return (
      <div>
          <div className="ZComo1Bookpage">
              <Header />
              <Backimg />
              <Datacomp2/>
               <Bookingcard/>
               <About/>

               <Footer/>
    </div>
      </div>
    );
  };
  
  export default NewPage2; 