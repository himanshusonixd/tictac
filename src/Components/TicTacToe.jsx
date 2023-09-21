import './TicTacToe.css'
import circlepng from '../assets/circle.png'
import crosspng from '../assets/Twitter X.png'
import { useRef, useState } from 'react'

let data = ["","","","","","","","",""];

console.log("start")




function TicTacToe() {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleref =useRef(null);
    let box1= useRef(null)
    let box2= useRef(null)
    let box3= useRef(null)
    let box4= useRef(null)
    let box5= useRef(null)
    let box6= useRef(null)
    let box7= useRef(null)
    let box8= useRef(null)
    let box9= useRef(null)

    let boxArray=[box1,box2,box3,box4,box5,box6,box7,box8,box9]


    let gameHandler = (e, num) => {
        if(lock === true){
            return -1;
        }
        

        if (count%2===0) {
            e.target.innerHTML = `<img src='${crosspng}'>`
            data[num] ="x"
            setCount(count = count + 1)
            console.log(count +"count is ")
           console.log(data +" array is")
        }
        else {
            e.target.innerHTML = `<img src='${circlepng}'>`
            data[num]="o"
            setCount(count = count + 1)
            
        }
        
        winnerHandler();
    }

    const winnerHandler=()=>{

        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            winnerelement(data[2])
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            winnerelement(data[5])
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            winnerelement(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            winnerelement(data[6])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            winnerelement(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            winnerelement(data[8])
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            winnerelement(data[8])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            winnerelement(data[6])
        }

    }

    function winnerelement(winnerNumber){

        setLock(true);

        if(winnerNumber==="x"){
            titleref.current.innerHTML=`Congratulations <span>X</span>  won`
        }
        else if(winnerNumber==="o"){
            titleref.current.innerHTML=`Congratulations <span>O</span>  won`
        }
        else{
            titleref.current.innerHTML=`Match tied`
        }


    }

    const resetgame=()=>{

        setLock(false)

        data = ["","","","","","","","",""];
        console.log(data +"data after reset")

     titleref.current.innerHTML=`Tic Tac Toe by <span>Himanshu</span> `


     boxArray.map((e)=>{
        e.current.innerHTML=""
     })
    }



    return <div className='tictactoecontainer'>
        <h1 className='title' ref={titleref}>Tic Tac Toe by <span>Himanshu</span></h1>
       
        <div className='gameboard'>
            <div className="row1">
                <div className="boxes" onClick={(e) => { gameHandler(e,0) }}  ref={box1}></div>
                <div className="boxes" onClick={(e) => { gameHandler(e,1) }}  ref={box2}></div>
                <div className="boxes" onClick={(e) => { gameHandler(e,2) }}  ref={box3}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e) => { gameHandler(e,3) }}  ref={box4}></div>
                <div className="boxes" onClick={(e) => { gameHandler(e,4) }}  ref={box5}></div>
                <div className="boxes" onClick={(e) => { gameHandler(e,5) }}  ref={box6}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e) => { gameHandler(e,6) }}  ref={box7}></div>
                <div className="boxes" onClick={(e) => { gameHandler(e,7) }}  ref={box8}></div>
                <div className="boxes" onClick={(e) => { gameHandler(e,8) }}  ref={box9}></div>
            </div>

            <button className='resetbtn' onClick={resetgame}>Reset</button>
        </div>

    </div>

}

export default TicTacToe;