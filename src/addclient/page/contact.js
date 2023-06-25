import {React,useState} from "react";


let defaultInputClass =
  "border w-full border-gray-300 rounded-md text-sm font-light focus:ring-0 focus:border-cyan-500 ";

let defaultButtonClass =
  "px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md";

function InputLabel({ title }) {
  return (
    <label className="block text-sm text-gray-700 mb-1">
      {title}
    </label>
  );
}

function SimpleInput({ type, placeholder }) {
  return (
    <input
      type={type}
      className={defaultInputClass}
      placeholder={placeholder}
    />
  );
}

function SimpleInputWithDescription({ type, placeholder, desc }) {
  return (
    <div className="flex flex-col space-y-1">
      <SimpleInput type={type} placeholder={placeholder} />
      <span className="text-xs text-gray-400 italic text-light">{desc}</span>
    </div>
  );
}

function SimpleTextArea({ row, placeholder }) {
  return (
    <textarea
      rows={row ?? 3}
      defaultValue=""
      className={defaultInputClass}
      placeholder={placeholder}
    />
  );
}

function GroupedInputSelectStart({ type, placeholder, items }) {
  return (
    <div className="flex rounded-md">
      <select className="border border-r-0 border-gray-300 rounded-none rounded-l-md text-gray-700 bg-gray-100 font-light focus:ring-0 focus:border-gray-300">
        {items.map((e, i) => {
          return <option key={i}>{e}</option>;
        })}
      </select>
      <input
        type={type}
        className="block w-full border border-gray-300 rounded-none rounded-r-md font-light focus:ring-0 focus:border-cyan-500"
        placeholder={placeholder}
      />
    </div>
  );
}

function SimpleSelect({ items }) {
  return (
    <select className={defaultInputClass}>
      {items.map((e, i) => {
        return <option key={i}>{e}</option>;
      })}
    </select>
  );
}

function SimpleCheckbox({ title, desc }) {
  return (
    <div className="flex items-start space-x-2">
      <div className="flex items-center h-6">
        <input
          type="checkbox"
          className={
            "focus:ring-2 focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded"
          }
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-800">{title}</label>
        {desc && <span className="text-xs text-gray-400">{desc}</span>}
      </div>
    </div>
  );
}

function Contact() {

  const [documents,setDocuments] =useState([])



  const addOption= ()=>{
    let doc = {
        title : '',
        value : '',
        selected: false
    }
    setDocuments(oldArray => [...oldArray,doc] );

  }

  const removeOption=(index)=>{

    const data = documents;
    data.splice(index, 1);
    setDocuments(data);
    console.log(documents);
}

  return (
    <div className="px-5 py-4">
              {/* <h2 className="col-span-2 text-xl text-blue-600 font-semibold mb-4">
                Client
              </h2> */}
              <table class="border-collapse border border-slate-400 w-full">
              <thead>
              <tr>
                <th colSpan={6} class="border text-left px-4 bg-blue-100 text-blue-900 border-slate-300 py-4">DOCUMENTS</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="Contact Name" />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Occupation/Title" />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Phone" />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Email" />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Primary" />
                </td>
                <td onClick={() => addOption()} class="border border-slate-300 px-4">
                <i className='fa fa-circle-plus text-blue-700'></i><label className="text-sm ml-1 items-center">Add</label>
                </td>
              </tr>
             
                {documents.map((data,index)=>{
                  
                return (
                <tr key={index}>
                <td class="border border-slate-300 px-4 py-4">
                <SimpleInput type="text" placeholder="Name" />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleInput type="text" placeholder="Title" />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleInput type="text" placeholder="...." />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleInput type="text" placeholder="...." />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleCheckbox title="" />
                </td>
                <td onClick={() => removeOption(index)} class="border border-slate-300 px-4">
                <i className='fa fa-times text-red-700'></i>
                </td>
              </tr>)

              })}
              
              

              </tbody>
              </table>

             
            </div>
  );
}
export default Contact;
