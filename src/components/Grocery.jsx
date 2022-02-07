import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { v4 as uuid } from "uuid";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
  const [items, setItems] = useState([]);
  const groceryAdd = (text) => {
    let payload = {
      title: text,
      id: uuid(),
    };
    setItems([...items, payload]);
  };
  const groceryDelete = (id) => {
    let updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };
  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryInput groceryAdd={groceryAdd} />

      {items.map((item) => (
        <GroceryList key={item.id} {...item} groceryDelete={groceryDelete} />
      ))}
    </div>
  );
};
