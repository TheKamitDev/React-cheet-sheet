
import React from 'react'
import AddItems from './AddItems.jsx';
import Content from './Content.jsx';
import { useState } from 'react'
import './main.css'
import SearchItem from './SearchItem.jsx';

 const App = () => {
  const [items , setItems] = useState(JSON.parse(localStorage.getItem('myshopingItems')));
  const [newItem , setNewItem] = useState("")
  const [searchItem , setSearchItem] = useState("")


  const createNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = {id , checked:false , item};
    const listItems = [ ...items , mynewItem]
    setItems(listItems)
    localStorage.setItem('myshopingItems' , JSON.stringify(listItems))
  } 


  const deleteItems = (id) => {
    const listItems = items.filter(item =>  item.id !== id);
    setItems(listItems);
    localStorage.setItem('myshopingItems' , JSON.stringify(listItems))
  }
  const handleCheck = (id) => {
    const listItems = items.map(item => item.id === id ? {...item , checked:!item.checked} : {...item})
    setItems(listItems);
    localStorage.setItem('myshopingItems' , JSON.stringify(listItems))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    createNewItem(newItem)
    setNewItem("")
  }

  return (
    <div className='main__container'>
    <AddItems newItem={newItem} setNewItem={setNewItem}  handleSubmit={handleSubmit} />
    <SearchItem searchItem= {searchItem} setSearchItem= {setSearchItem} />
    <Content items={items.filter( item => (item.item).toLowerCase().includes(searchItem.toLowerCase()) )} 
     setItems= {setItems} deleteItems={deleteItems} handleCheck={handleCheck} />
    </div>
  )
}
export default App;

