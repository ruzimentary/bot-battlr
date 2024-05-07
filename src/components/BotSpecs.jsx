import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BotSpecs({ onEnlistBot }) {
  const navigate = useNavigate();
  const { botId } = useParams();
  const [bot, setBot] = useState (null);
  useEffect(() => {
    const fetchBotDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/bots/${botId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBot(data); 
      } catch (err) {
        console.error("Error fetching bot details:", err);
        setError("Could not load bot details.");
      }
    };

    fetchBotDetails();
  }, [botId]);

  const handleBackClick = () => {
    history.push("/");
  };

  const handleEnlistClick = () => {
    if (onEnlistBot && bot) {
      onEnlistBot(bot); 
      history.push("/");
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return bot ? (
    <div className="bot-specs">
      <h1>{bot.name}</h1>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleBackClick}>Back to List</button>
      <button onClick={handleEnlistClick}>Enlist Bot</button>
    </div>
  ) : (
    <p>Loading bot details...</p>
  );
}

export default BotSpecs;
