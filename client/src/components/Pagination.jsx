import React from 'react';

const Pagination = ({ currentPage, totalPages , onPageChange }) => {
    totalPages = 10
    const handleClick = (page) => {
        onPageChange(page); 
    };
    return (
        <div className='pagination'>
            {[...Array(totalPages).keys()].map((_, index) => (
                <button
                    className='button'
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    disabled={currentPage === index + 1} 
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
