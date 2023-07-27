import React from 'react';

const ShoppingItem = ({ item, onDelete }) => {

  const handleDelete = () => {
    onDelete(item)
  }

  return (
    <li className='list-group-item list-group-item-dark'>
      <span>{item}</span>
      <button className='btn btn-danger m-2' onClick={handleDelete}>x</button>
    </li>
  );
};

export default ShoppingItem;
