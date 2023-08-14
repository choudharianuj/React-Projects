import React from 'react';
import {Footer , Blog, Possibility, Features, WhatGPT3, Header } from './container'
import  {Cta, NavBar, Brand} from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'> 
        <div className="gradient__bg">
            <NavBar />
            <Header />
        </div>
        < Brand />
        < WhatGPT3 />
        < Features />
        < Possibility />
        < Cta/>
        < Blog/>
        < Footer/>
    </div>
  )
}

export default App