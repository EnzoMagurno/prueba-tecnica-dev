import React from 'react'

const SortOptions = ({onSortChange}) => {
  return (
    <>
    <div className="sort-buttons"></div>
    <button onClick={()=> onSortChange('asc')}>Price: Low to High</button>
    <button onClick={()=> onSortChange('desc')}>Price: High to Low</button>
    </>  
)
}

export default SortOptions