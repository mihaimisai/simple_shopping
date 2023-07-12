import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function List({items, setItems}) {

    const handleDelete = (index) => {
        setItems(prevItems => {
            return prevItems.filter(prevItem => prevItem.id !== index)
        })
    }

    return (
        <ul className='list-group my-5 w-25'>
            {items.map((item, index) => {
               return (
                <div className=''>
                    <li className="list-group-item" key={item.id}>
                        {item.title}
                        <button className='ms-5' onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                </div>
                    
            )
            })}
        </ul>
    )
}

export default List