import React, { useState, useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCard from './components/BotCard';
import SortBar from './components/SortBar';

const BotPage = () => {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('http://localhost:3001/bots');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const processedData = data.map((bot) => ({
          ...bot,
          id: Number(bot.id) 
        }));

        setBots(processedData);
        setFilteredBots(processedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBots();
  }, []);

  const handleReleaseBot = (botId) => {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  const handleEnlistBot = (bot) => {
  
    if (!army.some((b) => b.bot_class === bot.bot_class)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };  const handleDelete = (bot) => {
    console.log(`Deleting bot: ${bot.name}`);
    setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
  };

  const handleSortChange = (sortType) => {
    let sortedBots = [];
    if (sortType === 'health') {
      sortedBots = [...filteredBots].sort((a, b) => b.health - a.health);
    } else if (sortType === 'damage') {
      sortedBots = [...filteredBots].sort((a, b) => b.damage - a.damage);
    } else if (sortType === 'armor') {
      sortedBots = [...filteredBots].sort((a, b) => b.armor - a.armor);
    }
    setFilteredBots(sortedBots);
  };

  const handleClassFilterChange = (className, isChecked) => {
    const newClasses = isChecked
      ? [...selectedClasses, className]
      : selectedClasses.filter((c) => c !== className);

    setSelectedClasses(newClasses);

    // Apply the filtering
    const filtered = bots.filter((bot) =>
      newClasses.length === 0 ? true : newClasses.includes(bot.bot_class)
    );
    setFilteredBots(filtered);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Bot Management</h1>
      <SortBar onSortChange={handleSortChange} onClassFilterChange={handleClassFilterChange} />
      <YourBotArmy army={army} onReleaseBot={handleReleaseBot} />
      <div className="bot-collection">
        {filteredBots.map((bot) => (
          <BotCard 
          key={bot.id} 
          bot={bot} 
          onEnlist={() => handleEnlistBot(bot)}
          onDelete={() => handleDelete (bot) } />
        ))}
      </div>
    </div>
  );
};

export default BotPage;
