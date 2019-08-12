import React, { Component } from 'react';
import CardBody from "./components/CardBody";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";
// console.log(friends);

//NEW CODE FOR HOMEWORK

class App extends Component {
  
  state = {
    data: friends,
    score: 0,
    topScore: 0

  };
  handleIncrement = () => {
    // We always use the setState method to update a component’s state
    this.setState({ score: this.state.score + 1 });
  };
  
  deleteFriend = id => {
    this.setState({ friends: this.state.friends.filter(friend => friend.id !== id) });
  };

  render () {
    const {score, data, topScore} = this.state;
    return (
      <div>
              <Header
              score = {score} 
              topScore ={topScore}/>


              <CardBody 
              characters = {data}
              handleIncrement = {this.handleIncrement}
              />
             
              <footer class="footer">
                <div class="bottom">Clicky Game! <img alt="react" src="assets/images/react.svg" />

               </div>
              </footer>

        </div>
    ); 
         }
  }

export default App;
