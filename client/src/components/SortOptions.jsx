import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";


const SortOptions = ({onSortChange}) => {
  return (
    <>
    <div className="sort-buttons">
      <div className='button' onClick={()=>onSortChange('asc')}>
        <FaDollarSign/>
        <FaLongArrowAltDown/>
      </div>
      <div className='button' onClick={()=>onSortChange('desc')}>
        <FaDollarSign/>
        <FaLongArrowAltUp/>
      </div>
      <div>
      <div className='button' onClick={()=>onSortChange('asc')}>
      
      </div>

      </div>
    </div>
    </>  
)
}

export default SortOptions