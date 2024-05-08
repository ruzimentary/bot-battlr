import React, { useState, useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCard from './components/BotCard';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

const BotPage = () => {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBot, setSelectedBot] = useState(null);
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

  const handleClassFilterChange = (className, isChecked) => {
    const newClasses = isChecked
      ? [...selectedClasses, className]
      : selectedClasses.filter((c) => c !== className);

    setSelectedClasses(newClasses);

    const filtered = bots.filter((bot) =>
      newClasses.length === 0 ? true : newClasses.includes(bot.bot_class)
    );
    setFilteredBots(filtered);
  };

  const viewBotDetails = (bot) => {
    setSelectedBot(bot);
  };

  const goBackToList = () => {
    setSelectedBot(null);
  };

  const enlistSelectedBot = () => {
    if (selectedBot && !army.some((b) => b.id === selectedBot.id)) {
      setArmy((prevArmy) => [...prevArmy, selectedBot]);
    }
    setSelectedBot(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (selectedBot) {
    return (
      <BotSpecs bot={selectedBot} onGoBack={goBackToList} onEnlist={enlistSelectedBot} />
    );
  }

  return (
    <div>
      <h1>Bot Management</h1>
      <SortBar onClassFilterChange={handleClassFilterChange} />
      <YourBotArmy army={army} onReleaseBot={handleReleaseBot} />
      <div className="bot-collection">
        {filteredBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => viewBotDetails(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotPage;
