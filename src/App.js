import './App.css';

import Blob from './Blob'
import Footer from './Footer'

import React from "react";

function App() {
  return (
    <>
      <div className='App'>
        <div className='orange'>
          <h1>Curvy Website</h1>
        </div>

        <div className='spacer layer-1'></div>

        <div className='second-text'>
          <h2>What is the purpose of this?</h2>
          <p>There is none</p>
        </div>

        <div className='spacer layer-2'></div>

        <Blob />

        <div className='spacer layer-3'></div>

        <Footer />
        
      </div>
    </>
  );
}

export default App;
