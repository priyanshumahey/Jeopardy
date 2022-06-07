import './App.css';
import React from 'react'


// For later:
// https://react-bootstrap.github.io/components/overlays/

const Head = () => {
  return (
    <h1>JeoPriydy</h1>
  )
}



const Main = () => {
  return (
    <h2>
      Main
    </h2>
  )
}

const Foot = () => {
  return (
    <h2>
      Foot
    </h2>
    )
}


function App() {
  return (
    <div className="App">
      <Head />
      <Main />
      <Foot />
    </div>
  );
}


export default App;
