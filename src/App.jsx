import "./App.css";
import "./index.css";

import Footer from "./components/Footer";
import Manager from "./components/Manager";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  
  const [mode, setMode] = useState('light');
  const [bgc, setbgc] = useState('bg-gray-300')
  const [txtc, settxtc] = useState('text-black')

  const toggle = ()=>{
    if(mode == 'light')
    {
      setMode('dark')
      setbgc('bg-blue-950')
      settxtc('text-white')
    }
    else
    {
      setMode('light')
      setbgc('bg-gray-300')
      settxtc('text-black')
    }
  }

  return (
    <>
    <div className={`${bgc} ${txtc} flex flex-col min-h-screen`}>
      <Header toggle={toggle}/>
      <div className={`${bgc} ${txtc} flex-grow flex justify-center items-center`}>
        <Manager bgc = {bgc} txtc = {txtc} mode = {mode}/>
      </div>
      <Footer />
    </div>
      
    </>
  );
}

export default App;
