import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function TableHeader({ title }) {
    

    return (
      <th
        scope="col"
        className=" border border-slate-300 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {title}
      </th>
    );
  }
  
  function TableRow({ data }) {
    const [show,setShow]=useState(false);
    const toggle = () => {
      setShow(!show)
    }
    // let statusClass = " bg-green-100 text-green-700";
    // if (data.status === "angry") {
    // //   statusClass = " bg-red-100 text-red-700";
    // }
    return (
      <>
      <tr>
        <td onClick={() => toggle()}>{show?<i className="fa fa-minus-circle text-yellow-400 ml-4"></i>:<i className="fa fa fa-plus-circle ml-4"></i>}</td>
        <td className="border border-slate-300 px-6 py-4 whitespace-nowrap text-sm">{data.client_name}</td>
        <td className="border border-slate-300 px-6 py-4 whitespace-nowrap text-sm">{data.parent_client}</td>
        <td className="border border-slate-300 px-6 py-4 whitespace-nowrap text-sm">{data.phone}</td>
        <td className="border border-slate-300 px-6 py-4 whitespace-nowrap text-sm">{data.address}</td>
        <td className="border border-slate-300 px-6 py-4 whitespace-nowrap text-sm">{data.city}</td>
        <td className="border border-slate-300 px-6 py-4 whitespace-nowrap text-sm">{data.distric}</td>
        {/* <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={
              "px-2 py-1 text-sm font-medium rounded-full capitalize" +
              statusClass
            }
          >
            {data.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
          {data.role}
        </td> */}
        <td className="border border-slate-300 px-6 py-4 whitespace-nowrap text-sm font-medium">
          <a href="!#" className="bg-blue-500 px-3 py-2 mx-1 rounded text-white hover:bg-blue-900">
          <i className="fa fa-pencil"></i>
          </a>
          <a href="!#" className="bg-green-500 px-3 py-2 mx-1 rounded text-white hover:bg-green-900">
          <i className="fa fa-eye"></i>
          </a>
          <a href="!#" className="bg-red-500  px-3 py-2 mx-1 rounded text-white hover:bg-red-900">
          <i className="fa fa-times"></i>
          </a>
        </td>
      </tr>
      {show? <tr>
      <td></td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <di className="flax flex-row" >
      <label className="font-black text-blue-600" htmlFor="title">Prinary Contact</label>
        <p>test</p>                          
      </di>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <di className="flax flex-row" >
      <label className="font-black text-blue-600" htmlFor="title">Title/Occupation</label>
        <p>test</p>                          
      </di>
      </td>
      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <di className="flax flex-row" >
      <label className="font-black text-blue-600" htmlFor="title">Email</label>
        <p>test</p>                          
      </di>
      </td>
      <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <di className="flax flex-row" >
        <label className="font-black text-blue-600" htmlFor="title">Contact Person</label>
        <p>test</p>                          
      </di>
      </td>
      </tr>:null}
      
      </>
    );
  }
  
  function Client() {
    const users = [
      {
        client_name: "Hotel California",
        parent_client: "Restaurant",
        phone: "082273411470",
        address: "California",
        city:"Machupichu",
        distric:"Machu"
      },
      {
        client_name: "Hotel California",
        parent_client: "Restaurant",
        phone: "082273411470",
        address: "California",
        city:"Machupichu",
        distric:"Machu"
      }
     
    ];
    const history = useHistory();
  
    return (
      <div className="flex flex-col space-y-2 bg-gray-50 rounded px-4 r py-4">
        
        <div className="flex flex-row px-1 py-4 items-center justify-between ">
        
              <button onClick={()=> history.push("/add-client")}
                type="submit"
                className='float-right  text-cyan-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                
              ><i className='fa fa-plus'></i> Add client</button>
              
              <h4 className="font-medium text-cyan-900 py-1">Client overview</h4>
              
        </div>
        <div className="shadow ounded-b-md overflow-x-auto rounded-md">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-100">
              <tr>
                <th></th>
                <TableHeader title="Client Name" />
                <TableHeader title="Parent Client" />
                <TableHeader title="Phone" />
                <TableHeader title="Address" />
                <TableHeader title="Parish/City" />
                <TableHeader title="District/Zone" />
                <TableHeader title="Action" />
                {/* <th
                  scope="col"
                  className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  <span></span>
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {users.map((d, i) => {
                return <TableRow key={i} data={d} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row-reverse">
          <nav
            className="rounded-md border divide-x bg-white mt-4 text-sm text-gray-700"
            aria-label="Pagination"
          >
            <button className="px-3 py-2 focus:outline-none">Prev</button>
            <button className="px-4 py-2 focus:outline-none">2</button>
            <button className="px-4 py-2 focus:outline-none text-white bg-cyan-600">3</button>
            <button className="px-4 py-2 focus:outline-none">4</button>
            <button className="px-3 py-2 focus:outline-none">Next</button>
          </nav>
        </div>
      </div>
    );
  }
  
  export default Client;
  