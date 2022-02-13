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
  gameOver: boolean;
  speed: number;
};
function App() {
  const [, setState] = useState({});
  const contestants = useRef<ContestantType[]>([]);
  const finishedContestant = useRef<ContestantType>();
  const greenLight = useRef(true);
  const greenLightCounter = useRef(100);

  const render = (timeStamp: number) => {
    greenLightCounter.current--;

    if (greenLightCounter.current < 0) {
      greenLight.current = !greenLight.current;
      //Reset the counter to a value between 100 -200
      greenLightCounter.current = 100 + Math.random() * 100;
    }

    for (let i = 0; i < contestants.current.length; i++) {
      if (contestants.current[i].y < 100) {
        //contestant has reached the finish line!
        finishedContestant.current = contestants.current[i];
      }

      if (greenLight.current && !contestants.current[i].gameOver) {
        //let the contestants move up
        contestants.current[i].y -= contestants.current[i].speed;
      } else {
        if (Math.random() * 600 < 1) {
          //Contestant is game over
          contestants.current[i].gameOver = true;
        }
      }
    }

    setState({});
    if (!finishedContestant.current) requestAnimationFrame(render);
  };

  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      contestants.current.push({
        x: Math.random() * (1277.33 - 50),
        y: 1199,
        name: i.toString(),
        gameOver: false,
        speed: 0.7 + Math.random() * 0.3,
      });
    }

    requestAnimationFrame(render);
  }, []);
  return (
    <div className="App">
      {finishedContestant.current && (
        <div className="FinishedDialog">
          {finishedContestant.current.name} has reached the finish line!
        </div>
      )}
      <Playground>
        <Finish />
        <Doll />
        {contestants.current.map((c) => {
          return (
            <Contestant x={c.x} y={c.y} name={c.name} gameOver={c.gameOver} />
          );
        })}
      </Playground>
    </div>
  );
}

export default App;
