//外部のライブラリやファイルを参照するインポートの部分
import React from 'react';  //リアクトを使うときのおまじない的なやつ
import './Title.css';

// JSXやメソッドを定義する実質上の中身

const Title = (props) => {

    return(
      <div className="titleSection">
  
        <h2
          style={props.titleStyle}
          id="versionStatement"
        >{props.children}</h2>
  
        <p
          onClick={props.onClick}
          id="upgradeButton"
          className="upgrade-button"
        >Upgrade</p>
  
      </div>
    )
  }

// 外部のファイルがこのcomponentを利用できるようにするエクスポートの部分
export default Title;