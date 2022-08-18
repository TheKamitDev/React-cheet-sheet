import React from 'react'

const SearchItem = ({searchItem , setSearchItem }) => {
  return (
    <form action="" id='search__item'>
       <input type="text"  placeholder="search item" className='input__search'
       value={searchItem}
       onChange= {(e)=> setSearchItem(e.target.value)}
       />
    </form>
  )
}

export default SearchItem