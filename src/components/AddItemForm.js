import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (itemName.trim() === '') return;
    onAdd(itemName.toLowerCase());
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        autoFocus
      />
      <button type="submit" className='btn btn-success mx-2'>Add Item</button>
    </form>
  );
};

export default AddItemForm;
