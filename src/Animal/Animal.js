


export default function Animal({ name, type, says }) {
  return (
    <div className='animal'>
      <h3>{name} {type}</h3>
      <p>{says}</p>
      <img src={`./images/${name}.svg`}/>
    </div>
  );
}