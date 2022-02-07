import React from "react";

export const GroceryList = ({ id, title, groceryDelete }) => {
  const handleDelete = (id) => {
    groceryDelete(id);
  };
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "200px",
        height: "25px",
        padding: "20px",
      }}
    >
      <li>{title}</li>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
