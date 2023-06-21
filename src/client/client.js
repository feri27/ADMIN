function TableHeader({ title }) {
    return (
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {title}
      </th>
    );
  }
  
  function TableRow({ data }) {
    // let statusClass = " bg-green-100 text-green-700";
    // if (data.status === "angry") {
    // //   statusClass = " bg-red-100 text-red-700";
    // }
    return (
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm">{data.client_name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">{data.parent_client}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">{data.phone}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">{data.address}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">{data.city}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">{data.distric}</td>
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
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <a href="!#" className="bg-cyan-100 px-3 py-2 mx-1 rounded text-cyan-600 hover:text-cyan-800">
            Edit
          </a>
          <a href="!#" className="bg-green-100 px-3 py-2 mx-1 rounded text-green-600 hover:text-green-800">
            View
          </a>
          <a href="!#" className="bg-red-100 px-3 py-2 mx-1 rounded text-red-600 hover:text-red-800">
            Delete
          </a>
        </td>
      </tr>
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
  
    return (
      <div className="flex flex-col space-y-2">
        <h2 className="font-medium text-2xl py-5">Clients</h2>
        <div className="flex flex-row bg-gray-50 rounded-b-md px-5 py-4">
              <input
                type="submit"
                className='px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md'
                value="+"
              />
            </div>
        <div className="shadow overflow-x-auto rounded-md">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
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
  