
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

function Clientassets() {
  return (
   
            <div className="px-5 py-4">
              {/* <h2 className="col-span-2 text-xl text-blue-600 font-semibold mb-4">
                Client
              </h2> */}
              <table class="border-collapse border border-slate-400 w-full">
              <thead>
              <tr>
                <th colSpan={6} class="border text-left px-4 bg-blue-100 text-blue-900 border-slate-300 py-4">LOCATION</th>
              </tr>
              </thead>
              <tbody>
            
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="Location Name*" />
                
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Bldg Size" />
                </td>
                <td class="border border-slate-300 px-4 pt-2">
                <SimpleInput type="text" placeholder="...." />
                <div className="flex flex-row space-x-5 py-2">
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault01" />
                <label
                  class="mt-px text-gray-700 text-sm inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="radioDefault01">
                  Sq.Meter
                </label>
              </div>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault02"
                   />
                <label
                  class="mt-px text-gray-700 text-sm inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="radioDefault02">
                  Sq.Feet
                </label>
              </div>
                </div>
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="No. Staff" />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleInput type="text" placeholder="...." />
                </td>
              </tr>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="Address" />
                <i className="text-red-300 text-sm">street number and name</i>
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Parish" />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleInput type="text" placeholder="...." />
                </td>
              </tr>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="District/Zone*" />
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Post Code" />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleInput type="text" placeholder="...." />
                </td>
              </tr>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="First Name*" />
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                
              </tr>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="Last Name*" />
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                
              </tr>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="Occupation*" />
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                
              </tr>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="Email Address*" />
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                
              </tr>
              <tr>
                <td class="border border-slate-300 px-4 py-4">
                <InputLabel title="Mobile number*" />
                </td>
                <td class="border border-slate-300 px-4">
                
                <SimpleInput type="text" placeholder="...." />
                </td>
                <td class="border border-slate-300 px-4">
                <InputLabel title="Office number" />
                </td>
                <td class="border border-slate-300 px-4">
                <SimpleInput type="text" placeholder="...." />
                </td>
              </tr>
              </tbody>
              </table>

             
            </div>
      
       
  );
}

export default Clientassets;
