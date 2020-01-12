import React, { Component } from 'react';
import Card from "./components/Card/Card";
import images from "./images.json";
import Wrapper from "./components/Wrapper/Wrapper";
import './index.css';

class App extends Component {
  state = {
    images
  };
  

  render() {
    console.log(images);
    return (
      <Wrapper>
        {this.state.images.map(image => (
          <Card
          id={image.id}
          key={image.id}
          name={image.name}
          image={image.image}
          />
        ))}
      </Wrapper>
    );
  };
};

export default App;