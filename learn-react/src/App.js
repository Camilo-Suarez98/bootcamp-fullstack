import './App.css';
import Message from './Message.js'

const Description = (props) => {
  return <p style={{color: props.letter}}>
    {props.minimessage}
  </p>
}
// It's a good practice separate the components like in this case

function App() {

  return (
    <div className="App">
      <Message color='red' msg='I am working with React' />
      <Message color='blue' msg='for first time' />
      <Description letter='green' minimessage='And learning about props' />
    </div>
  );
  // The code between braces is always an evaluation of that i pass to it
}

export default App;
