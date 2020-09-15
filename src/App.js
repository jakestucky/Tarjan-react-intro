import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';
//react component incantation
class App extends Component {
  render() {
    return (
      <div>
        <h1>Happy react day</h1>

        <h3>Things to learn about react:</h3>
        <ThingsToLearn />
        <h3> Check out my sweet pics</h3>
        <PictureGallery />
        <h3> heres another one</h3>
        <PictureGallery />
      </div>
    );
  }
}

export default App;
