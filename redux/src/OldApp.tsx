import React from "react";

interface AppProps {
  color?:string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState>{
  // defined state in cosntructor instead of here, had to pass in AppState as a second param to be able to use constructor
  // state = {counter:0}

  constructor(props:AppProps){
    super(props)
    this.state = {counter:0}
  }

  onIncrement = ():void => {
    this.setState({counter: this.state.counter + 1})
  }

  onDecrement = ():void => {
    this.setState({counter: this.state.counter - 1})
  }

  render (){
    return (
    <div>
      <button onClick={this.onIncrement}>Increment</button>
      <button onClick={this.onDecrement}>Decrement</button>
      {this.state.counter} and {this.props.color}
    </div>
    ) 
  }
}

// Functional Component
// function App(props:AppProps): JSX.Element {
//   return (
//     <div>
//       <p> {props.color} </p>
//     </div>
//   );
// }

export default App;
