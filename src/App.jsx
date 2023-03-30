/**
 * developer : Divyangi
 */
import React from 'react'
import './App.css';
import Header from'./components/shared/Header';
import Footer from './components/shared/Footer';
import Board from './components/Board'
export default function App(){
  return (<React.Fragment>
            <Header/>
              <div className='body-style'>
                <Board/>
              </div>
            <Footer/>
          </React.Fragment>);
}