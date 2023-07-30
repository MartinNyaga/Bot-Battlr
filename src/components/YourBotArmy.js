import React from "react";

export default function YourBotArmy({yourBotArmy, removeFromArmy, botDeletion}){
    // Function to handle removing a bot from the army
  const handleRemoveFromArmy = (bot) => {
    removeFromArmy(bot);
  };

  // Function to delete bot from db
  const handleDeleteBot = (bot) => {
    botDeletion(bot)
    alert("Bot Discharged from Service!")
  };
  return(
    <div className="container">
                {yourBotArmy.map((bot) => (
                    <div className="element" key={bot.id} onClick={() => handleRemoveFromArmy(bot)} >
                      <h2>Added To Army</h2>
                        <img src={bot.avatar_url} alt={bot.name}/>
                        <div>
                        <button className="delete-button" onClick={()=> handleDeleteBot(bot.id)}>X</button>
                        </div>
                        <h3>Bot Name:  {bot.name}</h3>
                        <p>Class :  {bot.bot_class}</p>
                        <p>Catch Phrase :  {bot.catchphrase}</p>
                        <p>Armor :  {bot.armor}</p>
                        <p>Health :  {bot.health}</p>
                        <p>Damage :  {bot.damage}</p>
                        <p>Created At :  {bot.created_at}</p>
                        <p>Updated at :  {bot.updated_at}</p>
                        
                    </div>
                ))}
            </div>
  )
}