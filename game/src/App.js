import React from 'react'
import './App.css'

//Main page header
//Disappears past home
function Head() {
    return (      
    <>
        <h1 className="Title" >JeoPriydy</h1>
        <h3>Welcome to JeoPriydy, the classic quiz game! To begin, choose the number of people and start the game!</h3>
    </>
    )
};

const Quest = (props) => {
    //props:
        //text: Actual question being asked
        //answer: Answer
        //onCLick: onClick for the close button

    //Changes based on if answer button is seleted or not
    const [showAnswer, setshowAnswer] = React.useState(false)
    
    return (
        <div className="overlay" >
            <div className="text">
                {props.dd && <><h1 className="DD">DAILY DOUBLE!!!</h1></>}
                <h3>{props.text}</h3>
                {showAnswer && <h1>{props.answer}</h1>}
                <br></br>
                <button onClick={() =>setshowAnswer(!showAnswer)}>Answer</button>
                <button onClick={props.onClick}>Close</button>
                </div>
        </div>
    )
};


const Question = (props) => {
    
    const [showOverlay, setOverlay] = React.useState(true)
    const [showDisplay, setshowDisplay] = React.useState(false)
    

    const openOverlay = () => {
        setOverlay(!showOverlay)
        setshowDisplay(true)
    };

    return (
        <>
            {showDisplay && <Quest text={props.text} answer={props.answer} dd={props.dd} onClick={() => setshowDisplay(false)}/>}
            <div className="BodyQuestion"  onClick={() => openOverlay()}>{showOverlay && <>{props.amount}</>}{!showOverlay && <>-</>}</div>
        </>
    )
}



const Board = () => {
    return (
      <>
        <div className="App">
        <div className='parent'>
            <div className="headerstyle">Words in Research</div>
            <div className="headerstyle">Science Trivia</div>
            <div className="headerstyle">Title 3</div>
            <div className="headerstyle">Title 4</div>
            <div className="headerstyle">Title 5</div>
            <div className="headerstyle">Title 6</div>
          </div>
        <div className='parent'>
            <Question text="Question 1" answer="Answer 1" amount="100" dd={true}/>
            <Question text="Question 2" answer="Answer 2" amount="100" dd={false}/>
            <Question text="Question 3" answer="Answer 3" amount="100"/>
            <Question text="Question 4" answer="Answer 4" amount="100"/>
            <Question text="Question 5" answer="Answer 5" amount="100"/>
            <Question text="Question 6" answer="Answer 6" amount="100"/>
          </div>
          <div className='parent'>
            <Question text="Question 7" answer="Answer 7" amount="200"/>
            <Question text="Question 8" answer="Answer 8" amount="200"/>
            <Question text="Question 9" answer="Answer 9" amount="200"/>
            <Question text="Question 10" answer="Answer 10" amount="200"/>
            <Question text="Question 11" answer="Answer 11" amount="200"/>
            <Question text="Question 12" answer="Answer 12" amount="200"/>
          </div>
          <div className='parent'>
            <Question text="Question 13" answer="Answer 13" amount="400"/>
            <Question text="Question 14" answer="Answer 14" amount="400"/>
            <Question text="Question 15" answer="Answer 15" amount="400"/>
            <Question text="Question 16" answer="Answer 16" amount="400"/>
            <Question text="Question 17" answer="Answer 17" amount="400"/>
            <Question text="Question 18" answer="Answer 18" amount="400"/>
          </div>
          <div className='parent'>
            <Question text="Question 19" answer="Answer 19" amount="600"/>
            <Question text="Question 20" answer="Answer 20" amount="600"/>
            <Question text="Question 21" answer="Answer 21" amount="600"/>
            <Question text="Question 22" answer="Answer 22" amount="600"/>
            <Question text="Question 23" answer="Answer 23" amount="600"/>
            <Question text="Question 24" answer="Answer 24" amount="600"/>
          </div>
        </div>
      </>
    )
  }
  

//Main Management component
function App() {
    //Main Screen Manager
    const [showMain, setshowMain] = React.useState(false)

    //Player Management
        //Number of players
    let [players, setPlays] = React.useState(1)
        //Player Names - Honestly should have been change to an array or object but whatever
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
        //Points
    const [Points, setPoints] = React.useState()
    //onClicks
        //Changes Main
    const showMainClick = () => {setshowMain(true)
        setNames(formatName(nameArr, players))
        setPoints([0,0,0,0,0,0,0,0])
    };
        //Changes formating of the name
    const formatName = (arr, num) =>{
        let trueable = []
        for (let x=0; x <8; x++) {trueable.push(false)}
        for (let n=0; n<num; n++) {trueable[n] = true}
        let new_arr = []

        for (let j=0; j < arr.length; j++) {
          if (trueable[j]) {
            if (arr[j] !== undefined) {
              new_arr.push(arr[j])}
            else {new_arr.push("Team "+ (j + 1).toString()) }}
        };

        return new_arr
    };
        //Increases teams
    function increaseTeams () {
        if (players < 8) {setPlays(players + 1)}
        else {setPlays(8)}
    };
        //Decreases teams
    function decreaseTeams () {
        if ( players === 1) {players = 1}
        else {setPlays(players - 1)}
    };
        //Changes names
    function changeName (N, Na){
        setNameArr[N-1](Na)
    };  
        //Subnmit handler
    const handleSubmit= (e) => {
        e.preventDefault();
    };
        //Returns a map of the team names
    const teamNames = (n) => {
        let ar =[]
        for (let i =0; i <n; i++) {
          ar[i] = [i+1]}
        const teamMap = ar.map((num) => 
        <div key={num.toString()}>
          <form onSubmit={e => { handleSubmit(e) }}>
            <input name="nameChange1" placeholder={"Team " + num.toString()}type="text" onChange={e => changeName(num, e.target.value)}/>
          </form>
        </div>)
        return teamMap
    };
        //Point decrease
    function decreasePoint (n) {
        let new_arr = Points[n] - 100
        Points[n] = new_arr
        console.log(Points)
        setNames(formatName(nameArr, players))
        setPoints(Points)
    };
    function increasePoint (n) {
        let new_arr = Points[n] + 100
        Points[n] = new_arr
        console.log(Points)
        setNames(formatName(nameArr, players))
        setPoints(Points)
    };



    return (
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
            {showMain && <div>
                <div className="sideTeams">
                    {names.map(name => 
                    <div key={name}>
                        {name}
                        <div >
                            <button className="Points butt" onClick={()=>decreasePoint(names.indexOf(name))}>-</button>
                            <p  className="Points" key={Points[names.indexOf(name)]}> {Points[names.indexOf(name)]}</p>
                            {<button className="Points butt" onClick={()=> increasePoint(names.indexOf(name))}>+</button>}
                        </div>
                    </div>
                    )}
                </div>
                
                <div className="gameBody">
                    <h1>Game Board Name</h1>
                    {<Board />}
                </div>
            </div>}


        </div>
    )
};

//Components to make:
    //Board Component (no props, just simple board)
    //A smaller question component that takes in number prop, question prop, and answer prop. Add an optional daily double option
//Winner page ??
export default App;