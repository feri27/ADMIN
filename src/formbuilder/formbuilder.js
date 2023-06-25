
import InspectionForm from "../inspectionform/InspectionForm";

function Formbuilder({ title }) {
    return (
      <div className="flex flex-col space-y-2">
        <h2 className="font-medium text-2xl">Inspection Builder</h2>
        <InspectionForm/>
      </div>
    );
  }
  
  export default Formbuilder;
  