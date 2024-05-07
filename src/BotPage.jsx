import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function BotPage() {
  const [bots, setBots] = useState([]);

  const getData = () => {
    fetch(`http://localhost:3000/bots`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching bots:', error);
      });
  };
  
  useEffect(() => {
    getData();
  }, []);

  const enlistBot = (bot) => {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  };

  const removeBot = (bot) => {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  };

  const deleteBot = (bot) => {
    const botRemoved = bots.filter((b) => b.id !== bot.id);
    setBots((bots) => botRemoved);
  };

  return (
    <div>
      <YourBotArmy
        bots={bots.filter((b) => b.army)}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotCollection
        numberBots={bots}
        enlistBot={enlistBot}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotPage;
