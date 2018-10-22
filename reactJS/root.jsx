class HelloWorld extends React.Component {
    render() {
        return <h1>HelloWorld</h1>  // React に対して、どのような HTML コードをレンダリングするのかを伝える
    }
}
ReactDOM.render(<HelloWorld />,document.getElementById("root"))