import React from "react";

export default function BotCollection({bots, addToArmy, sortBy}){
  
    //Where we handle the sorting of the bots
    const sortedBots = [...bots];
    if (sortBy === "health") {
      sortedBots.sort((a, b) => a.health - b.health);
    } else if (sortBy === "damage") {
      sortedBots.sort((a, b) => a.damage - b.damage);
    } else if (sortBy === "armor") {
      sortedBots.sort((a, b) => a.armor - b.armor);
    }


    //Renderd bots
        return(
            <div className="container">
                {sortedBots.map((bot) => (
                    <div className="element" key={bot.id} onClick={()=> addToArmy(bot)} >
                        
                        <img src={bot.avatar_url} alt={bot.name}/>
                        
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