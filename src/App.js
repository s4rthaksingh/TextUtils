import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert = (message,type) =>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success")

    }
    
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
        <Textform heading="Enter text to analyze below" mode={mode}></Textform>
    </div>
    </>
  );
}

export default App;
