import Navbar from './components/Navbar';
import './App.css';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar></Navbar>
        <News></News>
      </>
    )
  }
}

