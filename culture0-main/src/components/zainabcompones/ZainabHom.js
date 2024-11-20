import React from 'react';
import  Backimg from "./Backimg";
import  Header from "../Header/Header";
import Compcard from "./Compcard";
import Footer from "../Footer/Footer"
import About  from "../About/About"
function Home() {
  return (
    
    <div className="Home">
    <Header/>
   <Backimg/>
   <Compcard/>
   <About/>
   <Footer/>
  
    </div>
  );
}

export default Home;