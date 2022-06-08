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
  const questions = ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5", "Cat 6"]
  const q1 = ["11", "12", "13", "14", "15", "16"]
  const q2 = ["21", "22", "23", "24", "2 5", "26"]
  const q3 = ["31", "32", "33", "34", "35", "36"]
  const q4 = ["41", "42", "43", "44", "45", "46"]
  const q5 = ["51", "52", "53", "54", "55", "56"]
  const p1 = 100
  const p2 = 200
  const p3 = 300
  const p4 = 400
  const p5 = 500

  const questionsList = questions.map((question) =>
  <li key={question}>
    {question}
    </li>
  )
  return (
    <div>
      <div className="sideTeams">
        <div>Team 1</div>
        <div>Team 2</div>
        <div>Team 3</div>
      </div>
      <div className="gameBody">
        <Board />
      </div>
    </div>
  )
}


const Board = () => {
  const finStyle = {
    display: "inline-block",
    backgroundColor: 'lightblue',
    padding: "5%",
    verticalAlign: "middle",
    margin: "1%",
    borderRadius: "15%",
    
  }
  const finStyle2 = {
    display: "inline-block",
    width: "4%",
    height: "1%",
    backgroundColor: 'lightblue',
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "1%",
    paddingBottom: "1%",
    verticalAlign: "middle",
    marginLeft: "1%",
    marginRight: "0.8%",
    border: "2px solid black",
    borderRadius: "7%",
  }
  const printWorking = (msg) => {
    console.log(msg)
    return
  }
  return (
    <>
      <div className="App">
      <div className='parent'>
          <div style={finStyle2} onClick={() => printWorking("Hello")}>Title 1</div>
          <div style={finStyle2}>Title 2</div>
          <div style={finStyle2}>Title 3</div>
          <div style={finStyle2}>Title 4</div>
          <div style={finStyle2}>Title 5</div>
          <div style={finStyle2}>Title 6</div>
        </div>
      <div className='parent'>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
        </div>
        <div className='parent'>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
        </div>
        <div className='parent'>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
        </div>
        <div className='parent'>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
        </div>
        <div className='parent'>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
          <div style={finStyle}></div>
        </div>
      </div>
    </>
  )
}


/*
<h1>{props.players}</h1>
      <h2>Main</h2>
<>{questionsList}</>
*/

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
  let [players, setPlays] = React.useState(1)

  //constants
  //const teams = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8"]

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
    if ( players === 1 ) {
      players = 1
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

      {/*{showMain && <Foot />}*/}
    </div>
  );
}


export default App;
