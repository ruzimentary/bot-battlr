import React from 'react';

const BotSpecs = ({ bot, onEnlistClick, onBackClick }) => {
  if (!bot) {
    return <p>Loading bot details...</p>;
  }

  return (
    <div>
      <h2>Bot Specs</h2>
      <h3>{bot.name}</h3>
      <button onClick={onEnlistClick}>Enlist Bot</button>
      <button onClick={onBackClick}>Back to List</button>
    </div>
  );
};

export default BotSpecs;
