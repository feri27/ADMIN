import React, { useContext } from 'react';
import FormContext from '../store/form-context';

function PaginateBar() {
  const {setCurrentPage, page, numOfPages, validate, validation} = useContext(FormContext);
  const buttonEl = [];

  const btnclass="shadow-sm py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
  const btnclassActive="shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900";
  for(let i=1; i<=numOfPages;i++) {
    buttonEl.push(<button key={i} className={`${btnclass} ${i<=page?btnclassActive:''}`} onClick={()=>setCurrentPage(i)} disabled={(i===numOfPages && validate(validation)===false) ? true: false}>{i}</button>)
  }


  
  return (
    <div className='flex flex-row items-center justify-between px-8 py-4 bg-gray-200 '>

       
        {buttonEl}
      
     
      {/* <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-cyan-600 text-xs font-medium text-cyan-100 text-center p-0.5 leading-none rounded-full" style={page===1?{width:'20%'}:page===2?{width:'50%'}:page===3?{width:'80%'}:{width:'100%'}}></div>
        </div> */}
    </div>
  )
}

export default PaginateBar