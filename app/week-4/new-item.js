"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };
        console.log(item);
        alert("Item added!");
        setCategory("produce");
        setName("");
        setQuantity(1);
    };

    return (
        <div  className="flex justify-center p-4">
            <form onSubmit={handleSubmit} className="p-4 bg-blue-950 rounded-md">
                <div className="flex justify-center"><label>
                    Name:{" "}
                    <input
                        placeholder="Item Name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="text-black border-2 border-gray-300 p-2 rounded-lg"
                        required="True"
                    />
                </label></div>
                <label>
                    Quantity:{" "}
                    <input
                        type="number"
                        min='1'
                        max='99'
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        className="text-black w-14 mt-2 border-2 border-gray-300 p-2 rounded-lg"
                    />
                </label>
                <label className="ml-2">
                    Category:{" "}
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="text-black mt-2 border-2 border-gray-300 p-2 rounded-lg"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </label><br/>
                <div className="flex justify-center">
                <button type="submit" className="w-full p-1 mt-2 bg-blue-500 border-2 border-blue-900 rounded-lg hover:font-bold hover:bg-blue-600">Add</button>
                </div>
            </form>
        </div>
    );
}