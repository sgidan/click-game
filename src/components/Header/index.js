import React from 'react';
import Navbar from "./Navbar/index";
import "./style.css";

export default function index(props) {
    return (
        <div>
            <Navbar score2 = {props.score} 
            topScore ={props.topScore}/>
            <div class="jumbotron jumbotron-fluid" >
  <div class="container">
    <h1 class="display-4">Clicky Game</h1>
    <p class="lead">Click an image to earn points, but don't click the same image twice!</p>
  </div>
</div>
        </div>
    )
}
