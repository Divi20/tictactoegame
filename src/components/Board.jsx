/**
 * developer : Divyangi
 * component : Board
 */

import React, {useEffect, useState } from "react";
import './Board.css';
import Square from "./Square";

export default function Board(){
    const [inputArray, setInputArray] =  useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winnerMessage, setWinnerMessage] = useState('');
    const [winner, setWinner] = useState('');
    const [maxMove, setMaxMove] = useState(9);
    const [gameLog, setGameLog] = useState([])

    /**
     * Function for calculating win based on wining combination
     */
    const calcualteWinning = () =>{
      if(maxMove >= 0){
      const combos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      for(let i = 0; i < combos.length; i++){
        
        let [ind1, ind2, ind3] = combos[i];
        if(inputArray[ind1] , inputArray[ind2] , inputArray[ind3] && inputArray[ind1] == inputArray[ind2] && inputArray[ind2]  == inputArray[ind3]){
          let win = inputArray[ind1];
          setWinner(win);
          setWinnerMessage(() => "Game Over. Winner is:"+ inputArray[ind1])
          return;
        }
      }

      if(maxMove == 1 && winner == ''){
        setWinnerMessage(() => "Game Tied. Play Again")
      }
    }
    else{
      setWinnerMessage(() => "Game Tied. Play Again")
    }
  }

    /**
     * Function to set next player
     */
    const nextPlayer = () =>{
      if(!winner){
        if(currentPlayer == 'X'){
          setCurrentPlayer('O')
        }
        else if(currentPlayer == 'O'){
          setCurrentPlayer('X')
        }
      }
    }

    /**
     * Function to decrease maxMove available
     */
    const moveDecrement = () =>{
      setMaxMove((m)=> m-1)
      setGameLog([...gameLog, {
        move : (9 - maxMove) + 1,
        player : currentPlayer
      }])
    }

    /**
     * Function to insert current player symbol in ith index of input array
     * @param {*} i 
     */
    const handleSquareClick = (i) =>{
        if(!winner && !inputArray[i]){
        let tempArray = inputArray;
        tempArray[i] = currentPlayer;
        setInputArray([...tempArray]);
        moveDecrement();
        calcualteWinning();
        nextPlayer();
      } 
    }

    /**
     * Function to reset the game
     */
    const resetGame = () =>{
      setInputArray(Array(9).fill(null));
      setCurrentPlayer('X');
      setWinnerMessage('');
      setWinner('');
      setMaxMove(9);
      setGameLog([]);

    }

    return (<React.Fragment>
              <div>
              {!winner ? maxMove > 0 && maxMove<9? <h1>Game Started. All the best!</h1> : maxMove == 9 ? <h1>Start Playing</h1> : '' : ''}
                {winnerMessage && <h1>{winnerMessage}</h1>}
                <div className="board-row">
                <Square squareVal={inputArray[0]} onSquareClick={() => handleSquareClick(0)}/>
                <Square squareVal={inputArray[1]} onSquareClick={() => handleSquareClick(1)}/>
                <Square squareVal={inputArray[2]} onSquareClick={() => handleSquareClick(2)}/>
                </div>
                <div className="board-row">
                <Square squareVal={inputArray[3]} onSquareClick={() => handleSquareClick(3)}/>
                <Square squareVal={inputArray[4]} onSquareClick={() => handleSquareClick(4)}/>
                <Square squareVal={inputArray[5]} onSquareClick={() => handleSquareClick(5)}/>
                </div>
                <div className="board-row">
                <Square squareVal={inputArray[6]} onSquareClick={() => handleSquareClick(6)}/>
                <Square squareVal={inputArray[7]} onSquareClick={() => handleSquareClick(7)}/>
                <Square squareVal={inputArray[8]} onSquareClick={() => handleSquareClick(8)}/>
                </div>
                <div className="button-row">
                {maxMove != 9 ? <button class="reset-button"onClick={resetGame}>Reset Game</button> : ''}
                </div>
                <hr></hr>
                <h4 className="gamesLog-heading">Game Logs</h4>
                <hr></hr>
                <div>
                {gameLog && gameLog.map((gl, i)=>{
                  return <p className="card">{"Move : " + gl.move + " by " + gl.player }</p>
                })}
                </div>
              </div>
            </React.Fragment>
        );
}