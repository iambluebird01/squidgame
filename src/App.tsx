import { useEffect, useRef, useState } from 'react';
import './App.css';
import Contestant from './components/Contestant/Contestant';
import Doll from './components/Doll/Doll';
import Finish from './components/Finish/Finish';
import Playground from './components/Playground/Playground';

type ContestantType = {
  x: number;
  y: number;
  name: string;
};
function App() {
  const [state, setState] = useState({});
  const contestants = useRef<ContestantType[]>([]);

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      contestants.current.push({
        x: Math.random() * (1277.33 - 50),
        y: 1199,
        name: i.toString(),
      });
    }

    setState({});
  }, []);
  return (
    <div className="App">
      <Playground>
        <Finish />
        <Doll />
        {contestants.current.map((c) => {
          return <Contestant x={c.x} y={c.y} name={c.name} />;
        })}
      </Playground>
    </div>
  );
}

export default App;
