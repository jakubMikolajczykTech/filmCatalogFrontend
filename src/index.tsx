import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/header/header';
import Nav from './components/nav/nav';
import Button from './components/button/button';
import Title from './components/title/title';
import TitleAddon from './components/titleAddon/titleAddon';
import Main from './components/main/main'
import SideMenu from './components/sideMenu/sideMenu'
import Footer from './components/footer/footer'

import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./main.scss"

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <div className='container pt-5 pb-4'>
    <div className='row h-100 mb-3'>
      <div className='col-md-8 min-h-215px'>
        <Header />
        <Nav />
      </div>

      <div className='col-md-4'>
        <Button />
      </div>
    </div>

    <div className='row mb-3'>
      <div className='col-md-8'>
        <Title />
      </div>
      
      <TitleAddon />
    </div>

    <div className='row'>
      <div className='col-md-8 mb-3'>
        <Main />
      </div>

      <div className='col-md-4 min-h-500px mb-3'>
        <SideMenu />
        <Footer />
      </div>
    </div>
  </div>
);

reportWebVitals();

