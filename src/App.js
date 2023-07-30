import React, {useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  //Declared variables for rendering the bots
    const [bots, setBots] = useState([]);
    const [yourBotArmy, setYourBotArmy] = useState([]);
    const [sortBy, setSortBy] = useState(null);

   


    //Fetching the bot data from deployed db.json 
    useEffect(() => {
      fetch('https://bot-app-data.onrender.com/bots')
        .then((response) => response.json())
        .then((data) => setBots(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);


     // Function to add a bot to the bot army
  const addToYourBotArmy = (bot) => {
    // Check if the bot is not already in the yourBotArmy before adding
    if (!yourBotArmy.find((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  // Function to remove a bot from the yourBotArmy
  const removeFromYourBotArmy = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  //function to delete bot from deployed DB 

  const handleBotDeletion = (botId) => {
    fetch(`https://bot-app-data.onrender.com/bots/${botId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setBots((prevBots) =>
        prevBots.filter((bot) => bot.id !== botId)
        );
      })
      .catch((error) => console.error('Error deleting bots:', error));
  };

  //function to handle sorting
  const handleSortChange = (sortBy) => {
    setSortBy(sortBy)
  }

  return (
    //Rendering bots on the web page
    <div className="App">
      <YourBotArmy bots={bots} yourBotArmy={yourBotArmy} removeFromArmy={removeFromYourBotArmy} botDeletion={handleBotDeletion} />
      <SortBar onSortChange={handleSortChange}/>
      <BotCollection bots={bots}  addToArmy={addToYourBotArmy} sortBy={sortBy}   />
    </div>
  );
}

export default App;
