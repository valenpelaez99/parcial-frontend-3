const Card = ({ submittedName, submittedSong }) => {
  return (
    <div>
      <h2>{`${submittedName} has elegido ${submittedSong}. ¡Gran gusto musical!`}</h2>
    </div>
  );
};

export default Card;
