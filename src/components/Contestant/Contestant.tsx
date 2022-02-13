import './Contestant.css';

type Props = {
  x: number;
  y: number;
  name: string;
};

export default function Contestant({ x, y, name }: Props) {
  return (
    <div style={{ left: `${x}px`, top: `${y}px` }} className="Contestant">
      {name}
    </div>
  );
}
