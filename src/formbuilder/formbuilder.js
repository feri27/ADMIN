import Builder from "../builder/builder";

function Formbuilder({ title }) {
    return (
      <div className="flex flex-col space-y-2">
        <h2 className="font-medium text-2xl">Form Builder</h2>
        <Builder>

        </Builder>
      </div>
    );
  }
  
  export default Formbuilder;
  