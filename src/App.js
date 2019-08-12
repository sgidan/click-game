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
  
  // deleteFriend = id => {
  //   this.setState({ friends: this.state.friends.filter(friend => friend.id !== id) });
  // };

  render () {
    const {score, data} = this.state;
    return (
      <div>
              <Header
              score = {score} />

              <CardBody 
              characters = {data}
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
