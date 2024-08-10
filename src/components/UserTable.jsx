import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


function UserTable({ 
  columns, 
  users,
  filteredUsers,
  page, 
  selectedRow, 
  handleSelectedAllRow, 
  handleSelectedRow,
  handleDelete,
  handleUserEdit
}) 
  {
   
  const currentUser = users.slice(0, 10);
  // console.log(selectedRow.length === currentUser.length);
  return (
    <div className='container mx-auto h-auto '>
    
      {/* Table Component */}
      <table className='container mx-auto table-auto text-center text-white text-xl'>
           <thead className=''>
           <th className='border-2 border-gray-300 px-2 py-1'>
              <input
              type="checkbox"
              checked={selectedRow.length === currentUser.length}
              onChange={handleSelectedAllRow}
            />
              </th> 
              {
                columns.map((column) =>{
                  return <th key={column} className='border-2 border-gray-300 px-2 py-3'>
                    {column.toUpperCase()}
                  </th>
                  
                })
              
              }
              <th className='border-2 border-gray-300 px-2 py-1'>
                Action
              </th> 
            </thead>
          
          <tbody>   
              {
                filteredUsers.slice(page * 10 - 10, page* 10).map((row) => 
                 (
                    <tr key={row.id} className=''>
                    <td className='border-2 border-gray-300 p-1'>
                      <input
                        type="checkbox"
                        className='w-8'
                        checked={selectedRow.includes(row.id)}
                        onChange={(event) => handleSelectedRow(event, row.id)}
                      />
                    </td>
                      {
                        columns.map((column) => <td key={column}  
                          className='border-2 border-gray-300 p-2'>
                          {row[column]}
                        
                        </td>
                       )
                      }
                      <td className='flex gap-4 justify-center border-2 border-gray-300 p-1'>
                        <button className='w-8 h-8 bg-gray-300 rounded-full' 
                        onClick={() => handleUserEdit(row.id)} >
                          <FaRegEdit className='mx-2 text-xl text-gray-800' />
                        </button>
                        <button className='w-8 h-8 bg-gray-300 rounded-full ' onClick={() => handleDelete(row.id)}>
                          <MdDelete className='mx-1.5 text-xl text-red-700'  />
                        </button>
                      </td>
                    </tr>
                  ))
            }
            
          </tbody>
      </table>
      
    </div>
  )
}

export default UserTable