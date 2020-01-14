import React, { Component } from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    lossMessage: 0,
    winMessage: 0,
    correctMessage: 0,
    clickedImages: []
  };
  
  clickedImage = id => {
    let clickedImages = this.state.clickedImages;
    let score = this.state.score;
    let highScore = this.state.highScore;
    this.setState({
      showAlert: 0
    });

    if (!clickedImages.includes(id)) {
      clickedImages.push(id);
      console.log(clickedImages);
      this.increment();
      this.imageShuffle();
      this.setState({
        correctMessage: 1
      });
    } else if (this.state.score === 12) {
      // alert player win
      console.log("win")
      this.setState({
        winMessage: 1,
        score: 0,
        clickedImages: []
      });
    } else {
       // alert player loss
      this.setState({
        score: 0,
        clickedImages: []
      });
      console.log("duplicate");
      this.setState({
        lossMessage: 1
      });
    }

    //set high score
    if (score > highScore) {
      this.setState({
        highScore: score
      });
    };
  };

  // increase score
  increment = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle images
  imageShuffle = () => {
    this.setState({ images: shuffle(images) });
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.images.map(image => (
            <Card
              key={image.id}
              id={image.id}
              name={image.name}
              image={image.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    );
  };
};

export default App;