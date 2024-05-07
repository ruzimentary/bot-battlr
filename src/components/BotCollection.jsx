
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots = [], onEnlistBot }) {
 
  if (!Array.isArray(bots)) {
    console.error("The `bots` prop should be an array.");
    return <p>No bots available</p>;
  }

  return (
    <div className="bot-collection">
      {bots.length > 0 ? (
        bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlistBot={onEnlistBot} />
        ))
      ) : (
        <p>No bots available</p>
      )}
    </div>
  );
}

export default BotCollection;
