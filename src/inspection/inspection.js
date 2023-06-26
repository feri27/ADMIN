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
        <label className="px-2 py-1 rounded text-xs font-medium bg-green-500 text-white">Pass</label>
        </td>
      </tr>
      {show? <tr>
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
  
  function Inspections() {
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
        <div className="px-1 py-1">
          <table className="w-full divide-y">
            <thead className="bg-gray-100">
              <tr>
                <TableHeader title="Title" />
                <TableHeader title="Location" />
                <TableHeader title="Assets" />
                <TableHeader title="Address" />
                <TableHeader title="Date" />
                <TableHeader title="Status" />
                <TableHeader title="Result" />
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
        
    );
  }
  
  export default Inspections;
  