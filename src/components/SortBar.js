import React from "react";

export default function SortBar({onSortChange}) {

    //Drop down menu for sorting
    return(
        <div className="sort-bar">
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Select Option</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
    )
}

