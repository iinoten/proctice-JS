//外部のライブラリやファイルを参照するインポートの部分
import React from 'react';  //リアクトを使うときのおまじない的なやつ

// JSXやメソッドを定義する実質上の中身

const Title = (props) => {
    return(
        <div>
            <h2 style={props.titleStyle}>{props.title}</h2>
        </div>
    )
}

// 外部のファイルがこのcomponentを利用できるようにするエクスポートの部分
export default Title;