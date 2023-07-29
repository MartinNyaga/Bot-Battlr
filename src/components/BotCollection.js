import React from "react";

export default function BotCollection({bots, addToArmy}){
  
    //Renderd bots
        return(
            <div className="container">
                {bots.map((bot) => (
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