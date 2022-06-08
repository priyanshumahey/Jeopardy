import './App.css';
import React from 'react'


// For later:
// https://react-bootstrap.github.io/components/overlays/

const Head = () => {
  return (
    <h1 className="Title">JeoPriydy</h1>
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
  const [showMain, setshowMain] = React.useState(false)
  const showMainClick = () => {
    setshowMain(true)
  }
  return (
    <div className="App">
      {!showMain && <Head />}
      {!showMain && <button className="StartButton" onClick={showMainClick}>Start the game!</button>}
      {showMain && <Main />}
      {showMain && <Foot />}
    </div>
  );
}


export default App;
