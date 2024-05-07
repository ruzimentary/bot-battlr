import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlistBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onEnlistBot={onEnlistBot} />
      ))}
    </div>
  );
}

export default BotCollection;
