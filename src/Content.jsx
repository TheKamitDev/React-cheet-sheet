import React from 'react'
import { FaTrash } from "react-icons/fa";
import './main.css'


const Content = ({items , setItems , deleteItems , handleCheck}) => {
    
    return(
        <main>
            {
                items.length ? (
                    <ul className="container">
                    {
                        items.map(item => {
    
                           return(
                            <li key={item.id} className="items" >
                                <input  type= "checkbox" checked={item.checked} onClick={() => handleCheck(item.id)} />
                                <label>{item.item}</label>
                                <FaTrash onClick={() => deleteItems(item.id)}/>
                            </li>
                           )
                        })
                    }
                </ul>
                ) : (<p className=''> your list is empty </p>)
            }
        </main>
    )
}
export default Content;