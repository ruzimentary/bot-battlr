import React from 'react';

const YourBotArmy = ({ army, onReleaseBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <ul>
        {army.map((bot) => (
          <li key={bot.id}>
            {bot.name}
            <button onClick={() => onReleaseBot(bot.id)}>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
