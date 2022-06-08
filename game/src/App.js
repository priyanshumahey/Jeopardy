import './App.css'
import React from 'react'

//Main page header
const Head = () => {
  return (
    <>
      <h1 className="Title" >JeoPriydy</h1>
      <h3>Welcome to JeoPriydy, the classic quiz game! To begin, choose the number of people and start the game!</h3>
    </>
  )
}




function App () {
  //States
  let [players, setPlays] = React.useState(1)
  const [showMain, setshowMain] = React.useState(false)

  const [name1, setName1] = React.useState()
  const [name2, setName2] = React.useState()
  const [name3, setName3] = React.useState()
  const [name4, setName4] = React.useState()
  const [name5, setName5] = React.useState()
  const [name6, setName6] = React.useState()
  const [name7, setName7] = React.useState()
  const [name8, setName8] = React.useState()
  const nameArr = [name1, name2, name3, name4, name5, name6, name7, name8]
  const setNameArr = [setName1, setName2, setName3, setName4,setName5,setName6,setName7,setName8]
  //onClicks
  const showMainClick = () => {setshowMain(true)};
  function increaseTeams () {
    if (players < 8) {
      setPlays(players + 1)
    }
    else {
      setPlays(8)
    }
  };
  function decreaseTeams () {
    if ( players === 1 ) {
      players = 1
    }
    else {
      setPlays(players - 1)
    }
  };
  function changeName (N, Na){
    setNameArr[N](Na)
  }
  const handleSubmit= (e) => {
    e.preventDefault();
  }


  //Team Names function
  const teamNames = (n) => {
    let ar =[]
    for (let i =0; i <n; i++) {
      ar[i] = [i+1]
    }
    const teamMap = ar.map((num) => 
    <div key={num.toString()}>
      <form onSubmit={e => { handleSubmit(e) }}>
        <input name="nameChange1" placeholder={"Team " + num.toString()}type="text" onChange={e => changeName(num, e.target.value)}/>
      </form>
    </div>)
    return teamMap
  };


  return(
    <div className="App">
      {/*Header*/}
      {!showMain && <Head />}

      {/*Team Buttons*/}
      {!showMain && <div className="App">
        <button className="playbutton" onClick={decreaseTeams}>-</button>
        <div className="App players"> {players} 
        </div>
        <button className="playbutton" onClick={increaseTeams}>+</button>
      </div>}
      {/*Start Button*/}
      {!showMain && teamNames(players)}
      <></>
      {!showMain && <button className="StartButton" onClick={showMainClick}>Start the game!</button>}
      {showMain && <div><h1>Showing Main</h1></div>}
    </div>
  )
}






export default App;