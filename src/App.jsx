import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import SortBar from "./components/SortBar";

const App = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch("http://localhost:3000/bots"); // Corrected URL
        if (!response.ok) {
          throw new Error("Failed to fetch bots data");
        }
        const data = await response.json();
        setBots(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBots();
  }, []);

  if (loading) {
    return <p>Loading bots data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (bots.length === 0) {
    return <p>No bots available.</p>;
  }

  return (
    <div className="App">
      <h1>Bot App</h1>
      <SortBar />
      <BotCollection bots={bots} />
    </div>
  );
};

export default App;
