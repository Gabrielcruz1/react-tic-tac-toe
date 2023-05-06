import { useState } from 'react';



function Square({ value, onSquareClick }) {
    
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}





export default function Board() {
    //Taking turns state 
    const [xIsNext, setXIsNext] = useState(true)
    //creates an array with 9 el and sets them to null. 
    const [squares, setSquares] = useState(Array(9).fill(null));

    //Update squares array holding board state 
    function handleClick(i){
        //if square already filled return 
        if(squares[i]){
            return
        }
        //creates copy of array with slice 
        const nextSquares = squares.slice();
        //Updates clicked square with X, O if false 
        if(xIsNext){
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
         //calling setSquares func triggers re-render of components that use squares state 
         setSquares(nextSquares)
         //Changes true boolean state to false allows for turn taking 
         setXIsNext(!xIsNext)
    }

    return (
        <>
            <div className="board-row">
                {/* When square is clicked the code after => will run */}
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}