import "./SingleCards.css";

const SingleCard = ({ card, imageBack, onChoice, flipped, disabled }) => {
  function handleClick() {
    if (!disabled) onChoice(card);
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src={imageBack}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
