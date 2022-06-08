import './App.css';
import React from 'react'

// For later:
// https://react-bootstrap.github.io/components/overlays/

const Head = () => {
  return (
    <>
      <h1 className="Title" >JeoPriydy</h1>
      <h3>Welcome to JeoPriydy, the classic quiz game! To begin, choose the number of people and start the game!</h3>
    </>
  )
}

const Main = (props) => {
  return (
    <div>
    <h1>{props.players}</h1>
    <h2>
      Main
    </h2>
    </div>
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
  //states
  const [showMain, setshowMain] = React.useState(false)
  let [players, setPlays] = React.useState(0)

  //constants
  const teams = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8"]

  //onClicks
  const showMainClick = () => {
    setshowMain(true)
  }
  function increaseTeams () {
    if (players < 8) {
      setPlays(players + 1)
    }
    else {setPlays(8)}
  }
  function decreaseTeams () {
    if ( players === 0 ) {
      players = 0
    }
    else {setPlays(players - 1)}
  }


  return (
    <div className="App">
      {!showMain && <Head />}

      {!showMain && <div className="App">
        <button className="playbutton" onClick={decreaseTeams}>-</button>
        <div className="App players"> {players} 
        </div>
        <button className="playbutton" onClick={increaseTeams}>+</button>
      </div>}

      {!showMain && <button className="StartButton" onClick={showMainClick}>Start the game!</button>}

      {showMain && <div><Main players={players}/></div>}

      {showMain && <Foot />}
    </div>
  );
}


export default App;
