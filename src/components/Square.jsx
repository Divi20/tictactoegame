/**
 * developer : Divyangi
 * component : Square
 */
import "./Square.css";

export default function Square({squareVal, onSquareClick}){
    return <button className="button square-style" onClick={onSquareClick}>{squareVal}</button>
}