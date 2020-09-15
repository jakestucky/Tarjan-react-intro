import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';
//react component incantation
class App extends Component {
  render() {
    return (
      <div>
        <h1>Happy react day</h1>

        <h3>Things to learn about react:</h3>
        <ul>
          <li>HTML side of JS files</li>
          <li>Class app extends Component</li>
          <li>Render()?</li>
          <li>Import/Export?</li>
        </ul>
        <h3> Check out my sweet pics</h3>
        <PictureGallery />
      </div>
    );
  }
}

export default App;
