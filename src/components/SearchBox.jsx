import React from 'react';

function SearchBox({ search, handleInputSearch}) {

    // console.log("Search Box Data", search);

  return (
    <div className='container mx-auto py-6'>
          <input
            type="text"
            className="w-full p-2 rounded-md drop-shadow-2xl"
            placeholder="Search by name, email or role..."
            value={search}
            onChange={handleInputSearch}
          />

    </div>
  )
}

export default SearchBox