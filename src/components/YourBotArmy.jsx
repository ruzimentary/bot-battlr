import React from 'react';
import PropTypes from 'prop-types';

const YourBotArmy = ({ army = [], onReleaseBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <ul>
        {army.length ? (
          army.map((bot) => (
            <li key={bot.id}>
              {bot.name}
              <button onClick={() => onReleaseBot(bot.id)}>Release</button>
            </li>
          ))
        ) : (
          <li>No bots in the army.</li>
        )}
      </ul>
    </div>
  );
};

YourBotArmy.propTypes = {
  army: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  onReleaseBot: PropTypes.func.isRequired
};

export default YourBotArmy;
