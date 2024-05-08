import React from 'react';
import PropTypes from 'prop-types';

const YourBotArmy = ({ army, onReleaseBot, onDischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-collection">
        {army.length ? (
          army.map((bot) => (
            <div key={bot.id} className="army-card">
              <img
                src={bot.avatar_url}
                alt={`${bot.name} avatar`}
                style={{ width: '80px', borderRadius: '50%' }}
              />
              <h5>{bot.name}</h5>
              <p>Class: {bot.bot_class}</p>
              <button className="btn btn-secondary" onClick={() => onReleaseBot(bot.id)}>Release</button>
              <button className="btn btn-danger" onClick={() => onDischargeBot(bot.id)}>Discharge</button>
            </div>
          ))
        ) : (
          <p>No bots in the army yet!</p>
        )}
      </div>
    </div>
  );
};

YourBotArmy.propTypes = {
  army: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired
    })
  ).isRequired,
  onReleaseBot: PropTypes.func.isRequired,
  onDischargeBot: PropTypes.func.isRequired
};

export default YourBotArmy;
