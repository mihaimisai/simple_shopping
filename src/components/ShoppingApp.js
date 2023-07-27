import React, { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';
import AddItemForm from './AddItemForm';
import RefreshButton from './RefreshButton'
import LogoutButton from './LogoutButton';

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
        }).then(data=>{
          //console.log(data)
          setItems(data)
        })
  }
  
  const addItem = async (itemName) => {
    console.log('Adding item:', itemName);
    try {
      const response = await fetch('/add_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemName })
      });
  
      if (response.ok) {
        // Item added successfully, fetch the updated items list
        fetchItems();
      } else {
        // Handle the case where the server returned an error
        console.error('Error adding item:', response.statusText);
      }
    } catch (error) {
      // Handle any network-related errors
      console.error('Error adding item:', error);
    }
  }
    

  const deleteItem = async (itemName) => {
    try {
      await fetch(`/delete/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({itemName})
      })
      fetchItems()
    } catch (error) {
      console.error('Error deleting items:', error)
    }
  }

  return (
    <div className="container">
      <AddItemForm onAdd={addItem} />
      <RefreshButton />
      <ShoppingList items={items} onDelete={deleteItem} />
      <LogoutButton />
    </div>
  );
};

export default ShoppingApp;
