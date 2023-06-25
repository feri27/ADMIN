import React, { Component} from 'react';
import $ from "jquery";

class Preview extends Component{
    
    render(){
        return(
          
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed justify-center flex top-20 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-h-full max-w-3xl">
                <div className="relative bg-white rounded-lg shadow" role="document">
                    <div className="p-6 space-y-6">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h5 className="text-xl font-semibold text-gray-900 dark:text-white" id="exampleModalLabel">Preview</h5>
                            <button onClick={() => this.props.onClick(false)} type="button" class="text-red-500 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            {
                                this.props.fields.map((field, index) => {
                                    return this.renderField(field, index)
                                })
                            }
                        </div>
                        {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
            </div>
        )
    }

    componentWillReceiveProps(){
    }

    componentDidUpdate(){
        setTimeout(() => {
            $('.date_time_picker').datetimepicker({
                timeFormat: "hh:mm tt"
            });
            $('.time_picker').timepicker({
                timeFormat: "hh:mm tt"
            });
            $('.date_picker').datepicker();
        }, 0)
    }

    renderField(field, index){
        if(field === undefined || index === -1){
            return;
        }
        if(this.props.previews) {
            let Preview = this.props.previews.filter((tool) => {
                if (tool.states.toolType === field.toolType) {
                    return tool;
                }else{
                    return false;
                }
            })[0];
            if (Preview) {
                let PreviewClonedComponent = React.cloneElement(Preview.preview, field);
                return <div key={index}> { PreviewClonedComponent } </div>
            }
        }

        if(field.toolType === 'SINGLE_FIELD') {
            if(field.type === 'Textarea') {
                return (
                    <div key={index} className="flex flex-col">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <textarea value={field.defaultValue} placeholder={field.placeholder} className="border border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500"
                                  type={field.type} readOnly={field.validation.isReadOnly}
                                  required={field.validation.isRequired} />
                    </div>
                );
            }else if(field.type === 'Date'){
                return (
                    <p key={index} className="flex flex-col">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <input value={field.defaultValue} placeholder={field.placeholder} className="date_picker border border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500"
                               type='text' readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                    </p>
                );
            }else if(field.type === "Time"){
                return (
                    <p key={index} className="flex flex-col">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <input value={field.defaultValue} placeholder={field.placeholder} className="time_picker border border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500"
                               type='text' readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                    </p>
                );
            }else{
                return (
                    <div key={index} className="flex flex-col">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <input value={field.defaultValue} placeholder={field.placeholder} className="border border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500"
                               type={field.type} readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                    </div>
                );
            }
        }else if(field.toolType === 'SELECT_FIELD'){
            return (
            <div key={index} className="flex flex-col">
                <label className="label" htmlFor={field.title}>{field.title}</label>
                {
                    field.multiple ?
                        <select className='border border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500' multiple={field.multiple}>
                            {
                                field.options.map((option, index) => {
                                    return option.selected ?
                                        <option
                                            selected={option.selected}
                                            key={index} value={option.value}>{option.title}</option>
                                        :  <option key={index} value={option.value}>{option.title}</option>
                                })
                            }
                        </select>
                        :
                        <select className='border border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500' value={field.defaultValue}>
                            {
                                field.options.map((option, index) => {
                                    return <option key={index} value={option.value}>{option.title}</option>
                                })
                            }
                        </select>
                }
            </div>
            )
        }else if(field.toolType === 'CHECK_BOXES'){
            return (
                <div key={index} className="radios">
                    <label className="label" htmlFor="">{ field.title }</label>
                    <div>
                        {
                            field.checkBoxes.map((checkbox, index) => {
                                return(
                                    <div key={index} className={ field.inline ? "form-check-inline" : "form-check"}>
                                        <input
                                            name={checkbox.value}
                                            checked={checkbox.selected}
                                            className="form-check-input"
                                            type="checkbox"
                                            id={checkbox.value} />
                                        <label className="form-check-label" htmlFor={checkbox.value}>
                                            {checkbox.title}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br />
                </div>
            )
        }else if(field.toolType === 'RADIO_BUTTONS'){
            return (
               <div key={index} className="radios">
                   <label className="label" htmlFor="">{ field.title }</label>
                   <div className="radios-buttons">
                        {
                            field.radios.map((radio, index) => {
                                return (
                                    <div key={index} className={field.inline ? "form-check-inline" : "form-check"}>
                                        <input
                                            name={ field.multiple ? index : 'radio-group' }
                                            className="form-check-input"
                                            type="radio"
                                            checked={radio.selected || index === field.defaultValue}
                                            value={radio.selected}
                                            id={radio.value} />
                                        <label className="form-check-label" htmlFor={radio.value}>
                                            {radio.title}
                                        </label>
                                    </div>
                                )
                            })
                        }
                   </div>
                   <br />
               </div>
            )
        }else if(field.toolType === "PARAGRAPH"){
            return (
                <div key={index} className="paragraph">
                    <label className="label" hidden={field.title === ""} >{ field.title }</label>
                    <p className="p-2" style={{ textAlign : field.align, backgroundColor : field.backgroundColor, color : field.textColor }}>
                        {field.content}
                    </p>
                </div>
            )
        }else if(field.toolType === "DURATION_PICKER"){
            return (
                <div key={index} className="datetimepicker">
                    <label className="label m-0">{ field.title }</label>
                    <i className="fa fa-arrow-right" style={{ display: 'block',position: 'relative',left: '49%',top: '58px' }} />
                    <div className="row">
                        <div className="col-6 m-0">
                            <label className="label">{ field.titleFrom }</label>
                            <input placeholder="XX/XX/XXXX XX:XX XX" className="date_time_picker form-control" type="text"/>
                        </div>
                        <div className="col-6 m-0">
                            <label className="label">{ field.titleTo }</label>
                            <input placeholder="XX/XX/XXXX XX:XX XX" className="date_time_picker form-control" type="text"/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Preview;