import React, { Component } from 'react';
import './App.css';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header';


const YOUTUBE_API_KEY = 'AIzaSyBSRz2siRGny5nRXeJoVIsY-J_d-QwiSWQ'

class App extends Component {
  state = { video:[]}

  componentWillMount(){
    console.log("compornentWillMountです")
  }

  componentDidMount(){
    YSearch({key:YOUTUBE_API_KEY,term: '猫 きゅうり'},(data) => {
      this.setState({videos:data});
    });
    console.log("componentDidMountです");
  }

  shouldComponentUpdate(nextProps, nextState){  //用途:そのcomponentが本当に更新されるべきか、更新される予定のpropsとstateを現在のpropsとstateと比較して決める。
    console.log('更新前のstate' + this.state.videos);
    console.log('更新後のstate' + nextState.videos);
    return true;//んで多分trueかfalseか決めるんやとおもう。componentWillUpdateに影響する
  }

  componentWillUpdate(){  //直前のshouldComponentUpdateがtrueだったから動く
    console.log("componentWillUpdateです")
  }

  componentDidUpdate(){
    console.log("compnentDidUpdateです")
  }


  render() {
    console.log(this.state.videos);
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
