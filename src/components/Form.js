import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Form({items, setItems}) {

    const [newItem, setNewItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setItems(prevItems => {
            return [
                ...prevItems, 
                {id: crypto.randomUUID(), title: newItem}
            ]
        }
            )
        console.log(items)
        setNewItem('')
    }

    return (
        <form action="" onSubmit={handleSubmit} className="my-5">
            <label htmlFor="title">
                <input 
                    type="text" 
                    value={newItem} 
                    onChange={ e => setNewItem(e.target.value)}
                    autoFocus
                />
            </label>
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default Form