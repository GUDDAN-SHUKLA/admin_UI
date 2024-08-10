import React, { useState } from 'react'

function EditUserDetails({ editRowData, setIsModalOpen, handleUpdate }) {

  // Initialize local state with the data from props
  const [formData, setFormData] = useState({
    id: editRowData?.id || '',
    name: editRowData?.name || '',
    email: editRowData?.email || '',
    role: editRowData?.role || '',
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle save (edit) action
  const handleSave = () => {
    handleUpdate(formData);
    setIsModalOpen(false);
  };
  // console.log("Form Data :", formData);
  
  return (

    <div className='w-[400px] fixed top-[20%] left-[40%] flex flex-col bg-white 
     drop-shadow-lg rounded-md z-99'>
      <h3 className='text-xl font-bold text-center py-4'>
        Edit User Details
      </h3>
      <div className='flex flex-col mx-8'>
        <p className='text-md font-semibold'>ID : 
          <span> {formData.id}</span>
        </p>
        <label className='text-md font-semibold'>Name: 
          <input 
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='border border-black/10 rounded-md px-2 py-1 my-2 mx-4'
          />
        </label>
        <label className='text-md font-semibold'>Email: 
          <input 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='border border-black/10 rounded-md px-2 py-1 mx-4'
          />
        </label>
        <label className='text-md font-semibold'>Role: 
          <input 
            type='text'
            name='role'
            value={formData.role}
            onChange={handleChange}
            className='border border-black/10 rounded-md px-2 py-1 my-2 mx-4'
          />
        </label>
      </div>
      <div className='w-full flex justify-center items-center gap-4 my-4 cursor-pointer'>
        <button
          className='px-5 py-2 bg-green-500 rounded-md hover:bg-green-600'
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
        <button
          className='px-6 py-2 bg-green-500 rounded-md hover:bg-green-600'
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
 
  )
}

export default EditUserDetails