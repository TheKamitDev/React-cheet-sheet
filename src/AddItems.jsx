import React from 'react'


const AddItems = ({ newItem , setNewItem , handleSubmit}) => {
   
  return (
    <div>
        <form action="" className='add__input' onSubmit={handleSubmit}>
            <input type="text" className='input__field'
            autoFocus
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}/>
            <button className='input__btn' type='submit' >add item</button>
        </form>
    </div>
  )
}

export default AddItems