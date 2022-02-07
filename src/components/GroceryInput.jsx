import React, { useState } from "react";

export const GroceryInput = ({ groceryAdd }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    groceryAdd(text);
  };
  return (
    <div>
      <input
        value={text}
        placeholder="Add Item"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
