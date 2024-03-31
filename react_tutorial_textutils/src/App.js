
// ROUTER

import { useState } from 'react';
import './App.css';
import AboutSection from './components/about';
import Navbar from './components/navbar_props';
import TextForm from './components/textForm_state';
import Alert from './components/alert'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DidMountUseEffect from './hooks/useeffect/didMount';
import WillUnmountUseEffect from './hooks/useeffect/willUnmount';
import DidUpdateUseEffect from './hooks/useeffect/didUpdate';
import CombinedUseEffect from './hooks/useeffect/combined';
import UseRef from './hooks/useRef';

function App() {

  const [mode, setMode] = useState('light')
  const [colorPal, setcolorPal] = useState('primary')
  const [alert, setAlert] = useState(null)

  let showAlert = (type, message) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  let removeColor = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  let toggleColor = (cls) => {
    removeColor()
    document.body.classList.add('bg-' + cls)
    document.body.style.color = 'white'
    setcolorPal('light')
  }

  let toggleMode = () => {
    removeColor()
    setcolorPal('primary')
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("success", "The Dark Mode has been enabled.")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("success", "The Light Mode has been enabled.")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about='About' mode={mode} toggleColor={toggleColor} toggleMode={toggleMode} />
        <Navbar mode={mode} toggleColor={toggleColor} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<AboutSection />} />
            <Route path='/' element={<TextForm heading='Enter your text to analyze' showAlert={showAlert} mode={mode} colorPal={colorPal} />} />
          </Routes>
        </div>
      </BrowserRouter >
    </>
  );
}

export default App;
