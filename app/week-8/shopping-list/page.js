"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from './items.json';
import MealIdeas from "./meal-ideas.js";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context.js";

function clean(text){
  // Remove emojis and other non-alphanumeric characters
  text = removeEmojis(text);

  // Remove other stuff
  text = text.replace(/\d+(\s?L|dozen|kg)?/, '').trin();
  text = text.split(',')[0].trim();
  return text;
}

function removeEmojis(text){
  return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
}


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const {user} = useUserAuth();

  if (!user) {
    return (
     <p>Sign in to use the shopping list</p>
    );
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const sanitizedName = clean(item.name.trin());
    setSelectedItemName(sanitizedName);
    console.log(sanitizedName);
  };

    return (
      <main>
        <h1 className="text-xl font-bold">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}></NewItem>
        <div className="flex">
          <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    );
  }