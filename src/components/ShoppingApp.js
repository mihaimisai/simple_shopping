import React, { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';
import AddItemForm from './AddItemForm';

const ShoppingApp = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch('/data')
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data=>setItems(data))
  }

  const addItem = async (itemName) => {
    try {
      await fetch('/add_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: itemName })
      })
  
      fetchItems()
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }
    

  const deleteItem = async (id) => {
    try {
      await fetch(`/delete/${id}`, {
        method: 'DELETE'
      })
      fetchItems()
    } catch (error) {
      console.error('Error deleting items:', error)
    }
  }

  return (
    <div className="container">
      <ShoppingList items={items} onDelete={deleteItem} />
      <AddItemForm onAdd={addItem} />
    </div>
  );
};

export default ShoppingApp;
