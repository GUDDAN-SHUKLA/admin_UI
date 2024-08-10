import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FaAngleDoubleLeft , FaAngleDoubleRight } from "react-icons/fa";


function Pagination( { users, selectHandlePage , page}) {
  // console.log("showing User data in pagination :", users);

  return (
    <>
      { users.length > 0 && (
       
          <div className=" flex justify-center gap-4 my-6"> 

          {/* Backward Button start here */}
            <button
              className= "w-8 h-8 bg-white flex justify-center items-center border border-black rounded-full gap-1 mx-2 "
              onClick={() => selectHandlePage(1)  }
            >
              <FaAngleDoubleLeft  className=" text-black"  />
            </button>

            <button className="w-8 h-8 bg-white border border-black rounded-full"
            onClick={() => selectHandlePage(page - 1)}
            >
              <FaAngleLeft  className={`${page > 1 ? "opacity-100" : "opacity-40 cursor-not-allowed"} 
              mx-1 text-xl text-black `}  />
            </button>
          {/* Backward Button end here */}

          {/* Page Numbers Buttons start here */}
            {[...Array(Math.floor(users.length / 10) + 1)].map((_, i) => {
              return (
                <button
                  className={ `${page === i + 1 ? "bg-white text-black border-black" : ""} 
                    w-8 h-8 border border-black rounded-full px-2.5 bg-white ml-4 text-lg cursor-pointer `}
                  key={i} onClick={() => selectHandlePage(i + 1)}>
                  {i + 1}
                </button>
              );
            })}
          {/* Page Numbers Buttons end here */}

          {/* Forward Button start here */}  
            <button className= {`${page < users.length / 10 ? "opacity-100" : "opacity-50 cursor-not-allowed"}
             w-8 h-8 rounded-full bg-white`} 
             onClick={() => selectHandlePage(page + 1)}>
              <FaAngleRight  className="my-1.5 mx-2 text-xl text-black" />
            </button>
            <button
              className= {`${page < users.length / 10 - 1? "opacity-100" : "opacity-50 cursor-not-allowed"} 
              w-8 h-8 bg-white flex justify-center items-center rounded-full gap-1 mx-2`}
              onClick={() => selectHandlePage(5)}
            >
              <FaAngleDoubleRight  className="text-black" />
             
            </button>
           {/* Forward Button start here */}  
          </div>

      )
 
      }
  </>
  );
}

export default Pagination;
