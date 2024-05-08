import React from 'react';
import PropTypes from 'prop-types';
import './BotSpecs.css'; 

const BotSpecs = ({ bot, onGoBack, onEnlist }) => {
  return (
    <div className="bot-specs">
      <img className="bot-avatar" src={bot.avatar_url} alt={`${bot.name} avatar`} />
      <h2 className="bot-name">{bot.name} 🤖</h2>
      <ul className="bot-details">
        <li><strong>Class:</strong> {bot.bot_class} </li>
        <li><strong>Health:</strong> {bot.health} ❤️</li>
        <li><strong>Damage:</strong> {bot.damage} ⚔️</li>
        <li><strong>Armor:</strong> {bot.armor} 🛡️</li>
      </ul>
      <p className="bot-catchphrase">"{bot.catchphrase}" </p>
      <div className="bot-actions">
        <button className="btn back-btn" onClick={onGoBack}>🔙 </button>
        <button className="btn enlist-btn" onClick={onEnlist}>➕ </button>
      </div>
    </div>
  );
};

BotSpecs.propTypes = {
  bot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bot_class: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
    armor: PropTypes.number.isRequired,
    catchphrase: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired
  }).isRequired,
  onGoBack: PropTypes.func.isRequired,
  onEnlist: PropTypes.func.isRequired
};

export default BotSpecs;
