import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './compornents/Title/Title';  //読み込み

class App extends Component {

  state = { version: '1.0' }

  constructor(){
    super()

    this.state = {version:'1.0'}
  }

  

  // イベントハンドラー
  onClickHandler = () => {

    // 「Hello World」のh2タグをここで取得
    let nextVersion = parseInt(this.state.version, 10) + 1;
    this .setState({ version: nextVersion.toFixed( 1 )})
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Title
            title="Hello World 3.0"
            titleStyle={{color: 'orange'}}
            onClick={this.onClickHandler}
          >HelloWorld <span id="versionCounter" style={{borderBottom: '1px solid orange'}}>
          {this.state.version}
          </span>
          </Title>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
