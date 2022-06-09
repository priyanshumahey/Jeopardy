
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
  //definitely need to change name in array or object. This was of managing the states is trash
  const [name1, setName1] = React.useState()
  const [name2, setName2] = React.useState()
  const [name3, setName3] = React.useState()
  const [name4, setName4] = React.useState()
  const [name5, setName5] = React.useState()
  const [name6, setName6] = React.useState()
  const [name7, setName7] = React.useState()
  const [name8, setName8] = React.useState()
  const [names, setNames] = React.useState()
  const nameArr = [name1, name2, name3, name4, name5, name6, name7, name8]
  const setNameArr = [setName1, setName2, setName3, setName4,setName5,setName6,setName7,setName8]
  //const setPoints = [0,0,0,0,0,0,0,0]
  //onClicks
  const showMainClick = () => {setshowMain(true)
    setNames(formatName(nameArr, players))
  };

  function increaseTeams () {
    if (players < 8) {
      setPlays(players + 1)
    }
    else {
      setPlays(8)
    }
  };

  function decreaseTeams () {
    if ( players === 1) {
      players = 1
    }
    else {
      setPlays(players - 1)
    }
  };
  function changeName (N, Na){
    setNameArr[N-1](Na)
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
  
  const formatName = (arr, num) =>{
    let trueable = []
    for (let x=0; x <8; x++) {
      trueable.push(false)
    }
    for (let n=0; n<num; n++) {
      trueable[n] = true
    }
    console.log(trueable)
    let new_arr = []

    for (let j=0; j < arr.length; j++) {
      /*
      if (arr[i] === undefined) {
        if (trueable[i]){
          arr[i] = "Team "+ (i + 1).toString()
        }
        if (!trueable[i]){
          arr.splice(i)
        }
        i--
      }
      */
      if (trueable[j]) {
        if (arr[j] !== undefined) {
          new_arr.push(arr[j])
        }
        else {new_arr.push("Team "+ (j + 1).toString()) }
      }
      
    };
    console.log(new_arr)
    return new_arr

  }
  const [showDisplay, setshowDisplay] = React.useState(false)

  return(
    <div className="App">
      {/*Header*/}
      {!showMain && <Head />}

      {/*Team Buttons*/}
      {!showMain && <div className="App">
        <button className="playbutton" onClick={decreaseTeams}>&nbsp;-&nbsp;</button>
        <div className="App players">{players} 
        </div>
        <button className="playbutton" onClick={increaseTeams}>+</button>
      </div>}
      {/*Start Button*/}
      {!showMain && teamNames(players)}
      <></>
      {!showMain && <button className="StartButton" onClick={showMainClick}>Start the game!</button>}
      {showMain && <div><h1>Showing Main</h1></div>}
      {showMain && names.map(name => <div key={name}>{name}</div>)}
      <br></br>
      <button onClick={() => setshowDisplay(true)}>Overlay</button>
      {showDisplay && <div className="overlay" onClick={() => setshowDisplay(false)}>
        <div className="text">Question</div>
      </div>}
      {showDisplay && <Showdisplay onClick={() => setshowDisplay(false)} text="This text prop"/>}
    </div>
  )
}

const Showdisplay = (props) => {
  return(
    <div className="overlay" onClick= {props.onClick}>
        <div className="text">props.text</div>
      </div>
  )
}





export default App;