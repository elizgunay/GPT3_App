import React from 'react'

// import Article from './components/Article/Article'
// import Brand from './components/Brand/Brand'
// import CTA from './components/CTA/CTA'
// import Navbar from './components/Navbar/Navbar'
// import Feature from './components/Feature/Feature'


import {Footer,Blog,Possibility,Header,Features,WhatGPT3} from './containers';
import { Navbar,Brand,CTA } from './components'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App
