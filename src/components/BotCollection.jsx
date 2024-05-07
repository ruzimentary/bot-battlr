import React from "react";
import BotCard from "./BotCard";

function BotCollection({ numberBots, enlistBot, deleteBot }) {
    const showBot = numberBots.map((bot) => {
        return (
            <BotCard 
                key={bot.id}
                bot={bot}
                clickEvent={enlistBot}
                deleteBot={deleteBot}
            />
        );
    });

    return (
        <div className="container mt-4">
            <div className="row">
                {showBot}
            </div>
        </div>
    );
}

export default BotCollection;
