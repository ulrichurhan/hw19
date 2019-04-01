import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import friends from "./friends.json";
// import score from "./score.json";
var score = 0;
var found = [];
var gameOver = "Pick a card!";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // state = {
  //   score
  // };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    if(found.includes(id)) {
      // does exist, game over
      gameOver = " Card already picked...GAME OVER! Refresh to start a new game.";
      console.log("found: "+ found);
      console.log("GAME OVER")
      console.log("Final Score: " + score);
    }
    else {
      // does not exist, add it to array
      found.push(id);
      score = score + 1;
      console.log("found: "+ found);
      console.log("score: " + score);
    }
    
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <Score>Score: {score} </Score>
        <Score>{gameOver}</Score>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
