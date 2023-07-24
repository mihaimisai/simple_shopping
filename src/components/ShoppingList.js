import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingItem from './ShoppingItem';


function ShoppingList({items, onDelete}) {

    const itemList = items || [];

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <ul className='list-group list-unstyled my-5 w-25'>
                {itemList.map((item) => (
                    <ShoppingItem key={item._id} item={item} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList