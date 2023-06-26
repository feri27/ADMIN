import { useState } from "react";
import Inspections from "../inspection/inspection";

let defaultInputClass =
  "border w-full border-gray-300 rounded-md text-sm font-light focus:ring-0 focus:border-cyan-500 ";

let defaultButtonClass =
  "px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md";

function InputLabel({ title }) {
  return <label className="block text-sm text-gray-700 mb-1">{title}</label>;
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

function Clientdetail() {
  const [data, setData] = useState([...Array(5)]);

  return (
    <div className="p-2 bg-white rounded">
      {/* <h2 className="col-span-2 text-xl text-blue-600 font-semibold mb-4">
                Client
              </h2> */}
      <table class="border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th class="border border-white text-left px-4 bg-blue-100 text-blue-900 border-slate-300 py-4">
              CLIENT DETAIL
            </th>
            <th class="border  border-white text-left px-4 bg-blue-100 text-blue-900 border-slate-300 py-4">
              INSPECTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 px-4 py-4 space-y-4">
              <div className="flex flex-col">
                <label className="text-md text-blue-600">Account Name</label>
                <label className="text-sm text-blue-800">
                  Great House Corporation
                </label>
              </div>

              <div className="flex flex-col">
                <label className="text-md text-blue-600">
                  Tax/Business No.
                </label>
                <label className="text-sm text-blue-800">112 300 450</label>
              </div>

              <div className="flex flex-col">
                <label className="text-md text-blue-600">Phone:</label>
                <label className="text-sm text-blue-800">876 500 8765</label>
              </div>

              <div className="flex flex-col">
                <label className="text-md text-blue-600">Address</label>
                <label className="text-sm text-blue-800">25 River Street</label>
              </div>

              <div className="flex flex-col">
                <label className="text-md text-blue-600">Parish/City</label>
                <label className="text-sm text-blue-800">Saint Catherine</label>
              </div>

              <div className="flex flex-col">
                <label className="text-md text-blue-600">District</label>
                <label className="text-sm text-blue-800">
                  Greater Portmore
                </label>
              </div>

              <div className="flex flex-col">
                <label className="text-md text-blue-600">Post Code</label>
                <label className="text-sm text-blue-800">2426</label>
              </div>
            </td>

            <tr>
              <td colSpan={2}>
                <Inspections />
              </td>
            </tr>

            <tr>
              <th class="border  border-white text-left px-4 bg-blue-100 text-blue-900 border-slate-300 py-4">
                CONTACTS
              </th>
              <th class="border  border-white text-left px-4 bg-blue-100 text-blue-900 border-slate-300 py-4">
                DOCUMENTS
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex flex-col p-4 max-w-sm rounded-sm bg-gray-300 text-gray-700 text-sm mx-2 mt-2 mb-2">
                  <div className="flex flex-row space-x-5">
                    <label>Jeff Strong</label>
                    <label className="px-2 py-1 rounded text-xs font-medium bg-red-500 text-white">
                      Primary
                    </label>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <label>Title :</label>
                    <label>Restaurant Manager</label>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <label>Email :</label>
                    <label>jeff@greathouse.com</label>
                  </div>

                  <div className="flex flex-row space-x-2">
                    <label>Phone :</label>
                    <label>1(876) 772-6600</label>
                  </div>
                </div>

                <div className="flex flex-col p-4 max-w-sm rounded-sm bg-gray-300 text-gray-700 text-sm mx-2 mt-2 mb-2">
                  <div className="flex flex-row space-x-5">
                    <label>Jeff Strong</label>
                    {/* <label className="px-2 py-1 rounded text-xs font-medium bg-red-500 text-white">Primary</label> */}
                  </div>
                  <div className="flex flex-row space-x-2">
                    <label>Title :</label>
                    <label>Restaurant Manager</label>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <label>Email :</label>
                    <label>jeff@greathouse.com</label>
                  </div>

                  <div className="flex flex-row space-x-2">
                    <label>Phone :</label>
                    <label>1(876) 772-6600</label>
                  </div>
                </div>
              </td>
              <td>
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                        Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Uploaded at
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Uploaded by
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white dark:bg-gray-800">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                         Business registration
                        </th>
                        <td class="px-6 py-4">Business Docs</td>
                        <td class="px-6 py-4">3-Jan-2023</td>
                        <td class="px-6 py-4">Paul Mino</td>
                      </tr>

                      <tr class="bg-white dark:bg-gray-800">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                         Business registration
                        </th>
                        <td class="px-6 py-4">Business Docs</td>
                        <td class="px-6 py-4">3-Jan-2023</td>
                        <td class="px-6 py-4">Paul Mino</td>
                      </tr>
                      
                    </tbody>
                  </table>
                
              </td>
            </tr>
            <tr>
              <th
                colSpan={2}
                class="border  border-white text-left px-4 bg-blue-100 text-blue-900 border-slate-300 py-4"
              >
                NOTES
              </th>
            </tr>
            <tr>
                <td>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                        Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Created by
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Created at
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Last updated by
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Last updated at
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white dark:bg-gray-800">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                        These are some clients
                        </th>
                        <td class="px-6 py-4">Business Docs</td>
                        <td class="px-6 py-4">3-Jan-2023</td>
                        <td class="px-6 py-4">Paul Mino</td>
                        <td class="px-6 py-4">3-Jan-2023</td>
                      </tr>

                      <tr class="bg-white dark:bg-gray-800">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                         These are some clients
                        </th>
                        <td class="px-6 py-4">Business Docs</td>
                        <td class="px-6 py-4">3-Jan-2023</td>
                        <td class="px-6 py-4">Paul Mino</td>
                        <td class="px-6 py-4">3-Jan-2023</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Clientdetail;
