import React from 'react';

const BotSpecs = ({ bot, onEnlistClick, onBackClick }) => {
  return (
    <div className="bot-specs">
      <h2>Bot Specs</h2>
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={onEnlistClick}>Enlist Bot</button>
      <button onClick={onBackClick}>Back to List</button>
    </div>
  );
};

export default BotSpecs;
