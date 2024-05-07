import React from "react";

function YourBotArmy({ enlistedBots = [], onRemoveFromArmy, onDischargeBot }) {
    
    if (!Array.isArray(enlistedBots)) {
      console.error("The `enlistedBots` prop should be an array.");
      return <p>No bots in your army yet.</p>;
    }
  
    return (
      <div className="your-bot-army">
        {enlistedBots.length > 0 ? (
          enlistedBots.map((bot) => (
            <div key={bot.id}>
              <h3>{bot.name}</h3>
              <button onClick={() => onRemoveFromArmy(bot.id)}>Remove</button>
              <button onClick={() => onDischargeBot(bot.id)}>Discharge</button>
            </div>
          ))
        ) : (
          <p>No bots enlisted yet.</p>
        )}
      </div>
    );
  }
  
  export default YourBotArmy;
  