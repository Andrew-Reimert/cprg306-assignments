"use client";
import Item from "./item.js";
import { useState } from 'react';

export default function ItemList({ items }, onItemSelect) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });


    return (
        <div className="flex items-center flex-col">
            <div className="flex">
                <button onClick={() => setSortBy("name")} className="bg-blue-600 text-white p-2 m-2 rounded-md focus:bg-blue-950">Sort by Name</button>
                <button onClick={() => setSortBy("category")} className="bg-blue-600 text-white p-2 m-2 rounded-md focus:bg-blue-950">Sort by Category</button>
            </div>
            <ul>
                {sortedItems.map((items) => (
                    <Item key={items.id} name={items.name} quantity={items.quantity} category={items.category} onSelect={() => Item(onItemSelect)} />
                ))}
            </ul>
        </div>
    );
}