import React from "react";

function BotCard({ bot, onEnlist, onDelete }) {

  const handleEnlist = () => {
    onEnlist(bot);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete(bot);
  };

  return (
    <div
      className="card m-2"
      onClick={handleEnlist}
      style={{ cursor: "pointer" }}
    >
      <img
        className="card-img-top"
        src={bot.avatar_url}
        alt={`${bot.name} avatar`}
      />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">
          <strong>Class:</strong> {bot.bot_class} <br />
          <strong>Health:</strong> {bot.health} <br />
          <strong>Damage:</strong> {bot.damage} <br />
          <strong>Armor:</strong> {bot.armor} <br />
          <small>{bot.catchphrase}</small>
        </p>
        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BotCard;
