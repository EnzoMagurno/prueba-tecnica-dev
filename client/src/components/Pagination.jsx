import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (page) => {
        onPageChange(page); 
    };

    return (
        <div className='pagination'>
            {[...Array(totalPages).keys()].map((_, index) => (
                <button
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
