import React, { Component } from 'react';
import './App.css';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header';


const YOUTUBE_API_KEY = 'AIzaSyBSRz2siRGny5nRXeJoVIsY-J_d-QwiSWQ'

YSearch({key:YOUTUBE_API_KEY, term:'猫　きゅうり'},(data) =>{
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
