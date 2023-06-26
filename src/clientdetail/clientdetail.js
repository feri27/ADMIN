import { useState } from "react";

function Clientdetail() {

    const [data,setData]=useState([...Array(5)])
  
    return (
        <div className="flex flex-col space-y-2 bg-gray-50 rounded px-4 py-4">

        <div className="flex flex-row px-1 py-4 justify-between items-baseline ">
                
                <button
                type="text"
                className='float-right  text-cyan-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                
                ><i className='fa fa-plus'></i> Make Template</button>

                <div className="hidden md:inline-flex flex-1">
                        <input
                        type="text"
                        className="lg:w-1/3 border  border-gray-300 rounded font-light focus:ring-0 focus:border-cyan-500"
                        placeholder="Search Form .."
                        />
                       
                </div>
                
                <h4 className="font-medium text-cyan-900 py-1">Template Form</h4>
                
        </div>
        
        <div class="grid grid-cols-4 gap-4">
        {data.map((data,index)=>{

            return(

                <div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="flex flex-row space-x-6 py-2">
                    <label className="text-sm text-gray-500">Formulir Inspection {index+1}</label>
                    <button className=" rounded float-right text-white text-sm bg-blue-900 px-4 py-1">View</button>
                </div>
                <hr></hr>
                <div class=" animate-pulse flex space-x-4 py-2">
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-blue-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-blue-200 rounded col-span-2"></div>
                        <div class="h-2 bg-blue-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-blue-200 rounded"></div>
                    </div>
                    </div>
                </div>
                </div>
            )

        })}
        </div>
        <div className="flex flex-row-reverse">
          <nav
            className="rounded-md border divide-x bg-white mt-4 text-sm text-gray-700"
            aria-label="Pagination"
          >
            <button className="px-3 py-2 focus:outline-none">Prev</button>
            <button className="px-4 py-2 focus:outline-none">1</button>
            <button className="px-4 py-2 focus:outline-none text-white bg-cyan-600">2</button>
            <button className="px-4 py-2 focus:outline-none">3</button>
            <button className="px-3 py-2 focus:outline-none">Next</button>
          </nav>
        </div>
        
       
      </div>
    );
  }
  
  export default Clientdetail;