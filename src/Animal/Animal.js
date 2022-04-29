import './Animal.css';

export default function Animal({ name, type, says, top, left, size }) {
  return (
    <div className="animal" style={{ position: 'absolute', top, left }}>
      <img height={size} src={`/images/${type}.svg`} />
      <h4>{name}</h4>
      <p>{says}</p>
    </div>
  );
}
