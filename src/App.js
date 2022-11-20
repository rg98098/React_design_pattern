import './App.css'
import SplitScreen from "./SplitScreen";

const LeftHandComponent =({name})=> <h1 style={{background:"green"}}>{name}</h1>
const RightHandComponent =({message})=> <h1 style={{background:"red"}}>{message}</h1>

function App() {
  return <div className="App">
  <SplitScreen
    leftWeight={1}
    rightWeight={3}
  >
  <LeftHandComponent name={"Rahul"}/>
  <RightHandComponent message={"Hello"}/>
    </SplitScreen>
  </div>;
}

export default App;
