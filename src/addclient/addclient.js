import React, { useContext } from "react";
// import PaginateBar from "./PaginateBar";
// import classes from "./css/LandingFormPage.module.css";
// import UserNameForm from "./UserNameForm";
// import WorkspaceForm from "./WorkspaceForm";
// import UsageForm from "./UsageForm";
// import CongratzPage from "./CongratzPage";
import FormContext from "./store/form-context";
import Client from "./page/client.js"
import Document from "./page/documents"
import PaginateBar from "./page/paginateBar";
import Contact from "./page/contact";

function Addclient() {
  const {
    page,
    setCurrentPage,
    numOfPages,
    formData,
    setFinalData,
    resetDataState,
    validate,
    validation,
  } = useContext(FormContext);

  
  const pageSet = () => {
    console.log(numOfPages)
    if (page < numOfPages - 1) {        
      setCurrentPage(page + 1);
    } else if (page === numOfPages - 1) {  
      if (validate(validation)) {
        setCurrentPage(page + 1);
      } else {
        alert("Your form is incomplete");
      }
    } else if (page === numOfPages) {   
      setFinalData(current => [...current, formData]);
      resetDataState();
      setCurrentPage(1);
    }
  };

  return (
    <div className="flex flex-col space-y-2 shadow rounded-md bg-white">
      {/* <h2 className="font-medium text-2xl px-1 ">Clients</h2> */}
      <PaginateBar/>
      <div className="">
        {page === 1 && <Client />}
        {page === 2 && <Document/>}
        {page === 3 && <Contact/>}


        <div className="flex flex-row-reverse rounded-b-md px-5 py-4">
                <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md" onClick={pageSet}>
                {page === 4 ? `Submit` : <i className="fa fa-arrow-right"></i>}
            </button>
            </div>

      </div>
     
    </div>
  );
}

export default Addclient;