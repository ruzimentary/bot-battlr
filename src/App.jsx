import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import "./App.css";

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotClick = (botId) => {
    const bot = bots.find((bot) => bot.id === botId);
    setSelectedBot(bot);
  };

  const handleEnlistBot = (bot) => {
    setArmy([...army, bot]);
  };

  const handleReleaseBot = (botId) => {
    const updatedArmy = army.filter((bot) => bot.id !== botId);
    setArmy(updatedArmy);
  };

  return (
    <div className="App">
      <h1>Bot App</h1>
      <div className="container">
        <BotCollection bots={bots} onBotClick={handleBotClick} />
        <SortBar />
        <YourBotArmy army={army} onReleaseBot={handleReleaseBot} />
      </div>
      <BotSpecs bot={selectedBot} onEnlistClick={handleEnlistBot} />
    </div>
  );
};

export default App;
