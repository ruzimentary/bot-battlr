import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((enlisted) => enlisted.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
    fetch(`http://localhost:3000/bots/${botId}`, { method: "DELETE" });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BotCollection bots={bots} onEnlistBot={enlistBot} />
                <YourBotArmy
                  enlistedBots={army}
                  onRemoveFromArmy={removeFromArmy}
                  onDischargeBot={dischargeBot}
                />
              </>
            }
          />
          <Route path="/bots/:botId" element={<BotSpecs onEnlistBot={enlistBot} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
