import './App.css'
import SplitScreen from "./SplitScreen";

const LeftHandComponent =()=> <h1 style={{background:"green"}}>Left</h1>
const RightHandComponent =()=> <h1 style={{background:"red"}}>Right</h1>

function App() {
  return <div className="App">
  <SplitScreen
    left={LeftHandComponent}
    right={RightHandComponent}
    leftWeight={1}
    rightWeight={3}
  /></div>;
}

export default App;
