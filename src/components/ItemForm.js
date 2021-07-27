import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newCategory, setNewCategory] = useState("Produce")
  const [formData, setFormData] = useState({
    name: "",
    category: ""
  })

  function handleCategory(event) {
    setNewCategory(event.target.value)
  }

  function handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newItem = {
      id: uuid(),
      name: formData.name,
      category: newCategory
    }

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
