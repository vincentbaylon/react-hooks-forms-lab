import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputValue, setInputValue] = useState("")
  const [itemData, setItemData] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleInputChange(event) {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }

  function onItemFormSubmit(item) {
    let newItems = [...items, item]

    setItemData(newItems)
  }

  const itemsToDisplay = itemData.filter((item) => {
    if (inputValue === "") {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    } else {
      if ((item.name[0] === inputValue.toUpperCase()) || (item.name.includes(inputValue))) {
        return item
      }
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={inputValue} onCategoryChange={handleCategoryChange} onSearchChange={handleInputChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
