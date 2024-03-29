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
                {showAnswer && <h2>{props.answer}</h2>}
                <br></br>
                <button onClick={() =>setshowAnswer(!showAnswer)}>Answer</button>
                <button onClick={props.onClick}>Close</button>
                </div>
        </div>
    )
};


const Question = (props) => {
    //Shows you the overlay
    const [showOverlay, setOverlay] = React.useState(true)
    //Allows you to actually close the overlay
    const [showDisplay, setshowDisplay] = React.useState(false)
    
    //Opens Overlay and toggles points showing
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
};


const Board = () => {
    //Titles
    const titles  = ["Words in Research", "Meow Meow Meow", "Back in my Day...", "Before & After", "Demonyms", "Stupid Answers"]
    const titleMap = () => {
        return titles.map(title => <div className="headerstyle">{title}</div>)
    }
    
    return (
      <>
        <div className="App">
        <div className='parent'>
            {titleMap()}
          </div>
        <div className='parent'>
            <Question text="Used to hear" answer="Ear" amount="100" dd={false}/>
            <Question text="Has the loudest roar, very social cat" answer="Lions" amount="100" dd={false}/>
            <Question text="Dora's main sidekick" answer="Boots" amount="100" dd={false}/>
            <Question text="Bookseller made up of argon, neon, xenon, helium or radon" answer="Barnes and Noble gases" amount="100" dd={false}/>
            <Question text="People from Australia" answer="Australians" amount="100" dd={false}/>
            <Question text="The highest mountain in Kenya" answer="Mt. Kenya" amount="100" dd={false}/>
          </div>
          <div className='parent'>
            <Question text="Folding or creating a line on something" answer="Crease" amount="200" dd={false}/>
            <Question text="Largest species of cat" answer="Siberian tiger" amount="200" dd={false}/>
            <Question text="The name of the monkey in Aladdin" answer="Abu" amount="200" dd={false}/>
            <Question text="Celestial body of extremely intense gravity that scores an ace in golf" answer="A black hole in one" amount="200" dd={false}/>
            <Question text="People from Hong Kong" answer="Hong Kongers or Hong Kongese" amount="200" dd={false}/>
            <Question text="Founded in 1929, this New York museum is dedicated to modern art" answer="Museum of Modern Art" amount="200" dd={false}/>
          </div>
          <div className='parent'>
            <Question text="Solid remnants of fire" answer="Ash" amount="400" dd={false}/>
            <Question text="The only cat that can change its direction midair" answer="Cheetah" amount="400" dd={false}/>
            <Question text="The 4th highest selling game, in it, you bowl, play tennis, golf and box" answer="Wii Sports" amount="400" dd={false}/>
            <Question text="Mouselike boy in an E.B. White story traveling through the heavens as Ursa Minor" answer="	Stuart Little Dipper" amount="400" dd={true}/>
            <Question text="People from Toronto" answer="Torontonians" amount="400" dd={false}/>
            <Question text="The third largest city in Kansas" answer="Kansas City" amount="400" dd={false}/>
          </div>
          <div className='parent'>
            <Question text="Vehicle that carries the coffin at a funeral" answer="Hearse" amount="600" dd={false}/>
            <Question text="Hold the Guinness World Record for the animal species with the most names" answer="Cougar" amount="600" dd={false}/>
            <Question text="This song was so popular it broke Youtube and caused them to rebuild their architecture" answer="Gangnam Style" amount="600" dd={false}/>
            <Question text="Middle Eastern entertainment with rapid gyrations of the hips that's a reality TV show judged by Len Bruno and Carrie Ann" answer="Belly dancing with the stars" amount="600" dd={false}/>
            <Question text="People from Quebec" answer="Quebeckers" amount="600" dd={false}/>
            <Question text="In 1985, Neil Simon's 'Billoxi Blues' premiered at this theatre" answer="Neil Simon's theatre" amount="600" dd={false}/>
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
        //Points increase
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
                    <div className="TeamNames"key={name}>
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
                    <h1 className="GameTitle">URO</h1>
                    {<Board />}
                </div>
            </div>}


        </div>
    )
};

export default App;