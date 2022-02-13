import './App.css';
import Contestant from './components/Contestant/Contestant';
import Doll from './components/Doll/Doll';
import Finish from './components/Finish/Finish';
import Playground from './components/Playground/Playground';

function App() {
  return (
    <div className="App">
      <Playground>
        <Finish />
        <Doll />
        <Contestant />
      </Playground>
    </div>
  );
}

export default App;
