import React from 'react'

function SelectDelete({ selectedRow, handleDeleteSelectedRows }) {
  // console.log(selectedRow.length === 0);
  
  return (
    <div className=''>

        <button
          className={`${selectedRow.length === 0 ? "opacity-80 cursor-not-allowed" : "opacity-100 bg-red-600 "}
          bg-red-400 text-white py-1 px-4 rounded-2xl`}
          onClick={handleDeleteSelectedRows}
          
        >
          Delete Selected
        </button>


    </div>
  )
}

export default SelectDelete