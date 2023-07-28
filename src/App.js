import React, {useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';

import './App.css';

function App() {
  //Declared variables for rendering the bots
    const [bots, setBots] = useState([]);


    //Fetching the bot data from deployed db.json 
    useEffect(() => {
      fetch('https://bot-app-data.onrender.com/bots')
        .then((response) => response.json())
        .then((data) => setBots(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

  return (
    //Rendering bots on the web page
    <div className="App">
      <BotCollection bots={bots}  />
    </div>
  );
}

export default App;
