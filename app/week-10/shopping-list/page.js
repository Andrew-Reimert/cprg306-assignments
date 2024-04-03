"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context.js";
import { getItems, addItem } from "../_services/shopping-list-service.js";


function clean(text){
  // Remove emojis and other non-alphanumeric characters
  text = removeEmojis(text);

  // Remove other stuff
  text = text.replace(/\d+(\s?L|dozen|kg)?/, '').trim();
  text = text.split(',')[0].trim();
  return text;
}

function removeEmojis(text){
  return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
}


export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const {user} = useUserAuth();

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const items = await getItems(user.uid);
        setItems(items);
      }
    }
    loadItems();
  }, [user]);

  if (!user) {
    return (
     <p>Sign in to use the shopping list</p>
    );
  }

  const handleAddItem = (newItem) => {
    addItem(user.uid, newItem).then((id) => {
      setItems([...items, {id, ...newItem}]);
    });
  };

  const handleItemSelect = (item) => {
    const sanitizedName = clean(item.name.trim());
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