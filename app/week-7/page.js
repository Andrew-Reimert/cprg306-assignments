"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from './items.json';
import MealIdeas from "./meal-ideas.js";
import { useState } from "react";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (items) => {
    //const sanitizedName = items.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(items.name);
  };

    return (
      <main>
        <h1 className="text-xl font-bold">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <div className="flex">
          <ItemList items={items} onItemSelect={handleItemSelect} />
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    );
  }