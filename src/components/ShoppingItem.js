import React from 'react';

const ShoppingItem = ({ item, onDelete }) => {

  const handleDelete = () => {
    onDelete(item._id)
  }

  return (
    <li>
      <span>{item.name}</span>
      <button className='btn btn-danger m-2' onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ShoppingItem;
