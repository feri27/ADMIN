import React, { Component } from 'react';
import SingleField from './Types/SingleField';
import SelectField from "./Types/SelectField";
import CheckBoxes from './Types/CheckBoxes';
import Preview from './Preview';
import RadioButtons from "./Types/RadioButtons";
import Paragraph from "./Types/Paragraph";
import DurationPicker from "./Types/DurationPicker";

class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            dragActive : false,
            fields : [],
            orders : [],
            change : false,
            nameDuplicate: false,
            modal:false
        }
        this.popForm = this.popForm.bind(this);
        this.catchField = this.catchField.bind(this);
        this.resetStateOrder = this.resetStateOrder.bind(this);
        this.debugStateOrder = this.debugStateOrder.bind(this);
    }


    componentWillMount(){
        if(this.props.updateOnMount === true) {
            this.props.updateForm((form) => {
                this.setState({
                    fields : form,
                    orders : form
                })
            });
        }
    }

    resetStateOrder(){
        let order = [];
        let $ = window.$;
        let self = this;
        let list = this.tooList;
        let states = self.state.fields;
        $(list).children().each((i, l) => {
            let index = $(l).attr('data-index');
            order.push(states[index]);
        });
        self.setState({
            orders : order
        });
    }

    ifDuplicated(){
        if(this.state.nameDuplicate){
            return {
                backgroundColor: 'inherit'
            }
        }else{
            return {
                backgroundColor: 'inherit'
            }
        }
    }

    render() {
        return (
            <div className='toolbox' ref={(c) => this._toolBoxContainer = c}>
                {
                    this.props.debug === true ?
                        <pre>
                            { JSON.stringify(this.debugStateOrder(), null, 2) }
                        </pre>
                        :
                        <span hidden={true}></span>
                }
                {this.state.modal?<>
                    <Preview
                    onClick={(data)=> this.setState({modal:data})}
                    previews={ this.props.custom }
                    fields={this.state.orders} />
                </>:<></>}
                
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-0 py-8">
                        <span className="float-left">Form Container</span>
                        <div className="float-right">
                            <button onClick={() => this.setState({modal:true})} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="rounded bg-blue-600 text-white px-2 py-1">Preview</button>
                            { ' ' }
                            { 
                                this.props.loader ? 
                                <button disabled hidden={!this.props.onSave} className="rounded bg-green-600 text-white px-2 py-1"><i className="fa fa-spin fa-spinner"></i></button>
                                :
                                <button hidden={!this.props.onSave} onClick={() => this.popForm()} className="rounded bg-green-600 text-white px-2 py-1">Save</button>
                            }
                        </div>
                    </div>
                    <div className={ this.state.dragActive ? 'dragActive py-4' : 'py-4'}>
                        { this.state.nameDuplicate ? 
                            <p className="bg-red-100 border rounded border-red-400 text-red-700 px-4 mb-4 py-3">
                                <strong>Please resolve following errors.</strong>  
                                <ul>
                                    <li className='text-sm'>Name field cannot be empty</li>
                                    <li className='text-sm'>Remove whitespaces from name field</li>
                                    <li className='text-sm'>Duplicate name field found</li>
                                </ul> 
                            </p>  : '' 
                        }
                        <div ref={(l) => this.tooList = l} className="list-group gap-2">
                            { this.state.fields.length > 0 ?
                                this.state.fields.map((field, index) => {
                                    //console.log(field)
                                   return (
                                        
                                        this.renderToolBoxItems(field, index)
                                   )
                                })
                                : <div>
                                    <p style={{
                                        textAlign: 'center',
                                        padding: '2em',
                                        fontSize: '18pt',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        color: '#aaa',
                                        backgroundColor: '#eee'
                                    }}>Drag here</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    popForm(){
        let states = this.state.orders;
        let d = states.filter((data) => {
            return data !== null && data !== undefined
        });
        return this.props.onSave(d);
    }

    debugStateOrder(){
        let states = this.state.orders;
        let d = states.filter((data) => {
            return data !== null && data !== undefined
        });
        return d;
    }

    componentDidMount(){
        let list = this.tooList;
        let toolBoxContainer = this._toolBoxContainer;
        let self = this;
        var $ = window.$;
        $( function() {
            $( toolBoxContainer ).droppable({
                drop: function( event, ui ) {
                    let tool = $(ui.draggable[0]).attr('data-tool');
                    if(tool !== undefined){
                        self.catchField(tool);
                    }
                },
                over : function (event, ui) {
                    self.setState({
                        dragActive : true,
                    })
                },
                out : function (event, ui) {
                    self.setState({
                        dragActive : false,
                    })
                }
            });
            $( list ).sortable({
                update : function(event, ui){
                    self.setState({
                        dragActive : false,
                    })
                    self.resetStateOrder();
                },
                out : function(event, ui){
                    self.setState({
                        dragActive : false,
                    })
                }
            });
            $( list ).disableSelection();
        } );
    }

    renderToolBoxItems(field, index){
        //console.log(field);
        return (
            <div key={index} data-index={index}>
                { this.renderTool(field, index) }
               <hr/>
            </div>
        )
    }

    renderTool(field, index){
        console.log(field);
        if(this.props.custom) {
            let Component = this.props.custom.filter((tool) => {
                if (tool.states.toolType === field.toolType) {
                    return tool;
                }else{
                    return false;
                }
            })[0];

            if (Component) {
                let props = {
                    fields : field,
                    index : index,
                    key: index,
                    changeState : (e, index) => this.changeChildState(e, index),
                    removeField : () => this.remove(index)
                }
                let ClonedComponent = React.cloneElement(Component.container, props);
                return ClonedComponent;
            }
        }
        if(field.toolType === 'SELECT_FIELD'){
            return (
                    <SelectField changeState={(e, index) => this.changeChildState(e, index)}
                                 field={field}
                                 index={index}
                                 key={index}
                                 removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'SINGLE_FIELD'){
            return (
                    <SingleField changeState={(e, index) => this.changeChildState(e, index)}
                                 field={field}
                                 index={index}
                                 key={index}
                                 removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'CHECK_BOXES'){
            return (
                    <CheckBoxes changeState={(e, index) => this.changeChildState(e, index)}
                                field={field}
                                index={index}
                                key={index}
                                removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'RADIO_BUTTONS'){
            return (
                <RadioButtons
                            changeState={(e, index) => this.changeChildState(e, index)}
                            field={field}
                            key={index}
                            index={index}
                            removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'PARAGRAPH'){
            return (
                <Paragraph changeState={(e, index) => this.changeChildState(e, index)}
                           field={field}
                           key={index}
                           index={index}
                           removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'DURATION_PICKER'){
            return (
                <DurationPicker 
                             changeState={(e, index) => this.changeChildState(e, index)}
                             field={field}
                             index={index}
                             key={index}
                             removeField={() => this.remove(index)} />
            )
        }
    }

    changeChildState(e, index){
        if (index !== -1) {
            let fields = this.state.fields;
            fields[index] = e;
            this.setState( { fields : fields, change : this.state.change });
        }
        this.resetStateOrder();
        this.nameDuplicateReflector();
    }

    nameDuplicateReflector(){
        // duplicate names
        let f = this.state.fields;
        var arr = [];
        f.forEach((i) => {
            if(i.name !== undefined && i.name.trim() !== "" && i.name.indexOf(' ') === -1){
                arr.push(i.name);
            }
        });
        let unique = arr.filter(function (value, index, self) { 
            return self.indexOf(value) === index;
        });
        if(f.length !== unique.length){
            this.setState({
                nameDuplicate: true
            });
        }else{
            this.setState({
                nameDuplicate: false
            });
        }
    }

    remove(indexR){
        let fields = this.state.fields;
        fields.splice(indexR, 1);
        this.setState({
            fields : fields,
            change : this.state.change
        });
         this.resetStateOrder();
         this.nameDuplicateReflector();
    }

    isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    catchField(datas){
       
        const datalogic =this.isJson(datas)? JSON.parse(datas).toolType:datas ;
        const data = datalogic;
        //console.log(data)
        if(this.props.custom) {
            let toolItem = this.props.custom.filter((tool) => {
                if (tool.toolbox.name === data) {
                    return tool;
                }else{
                    return false;
                }
            })[0];

            if (toolItem) {
                let fields = this.state.fields;
                fields.push(toolItem.states);
                this.setState({
                    dragActive: false,
                    fields: fields
                });
                this.resetStateOrder();
                this.nameDuplicateReflector();
                return;
            }
        }

        let tools = ["SINGLE_FIELD", "SELECT_FIELD", "CHECK_BOXES", "RADIO_BUTTONS", "PARAGRAPH", "DURATION_PICKER"];
        if(tools.indexOf(data) === -1){
            this.setState({
                dragActive : false,
            });
            return;
        }
        var meta = {};
        //console.log(data);
        if(data === 'SINGLE_FIELD' && this.isJson(datas)===false){
            meta = {
                title : '',
                type : 'Text',
                toolType : 'SINGLE_FIELD',
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                }
            }
        }else if(data === 'DURATION_PICKER' && this.isJson(datas)===false){
            meta = {
                titleTo : 'Title',
                titleFrom : 'Title',
                title : '',
                type : 'DURATION',
                toolType : 'DURATION_PICKER',
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                }
            }
        }else if(data === 'SELECT_FIELD' && this.isJson(datas)===false){
            meta = {
                title : '',
                type : 'SELECT',
                toolType : 'SELECT_FIELD',
                multiple: false,
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                },
                options : []
            }
        }else if(data === 'CHECK_BOXES' && this.isJson(datas)===false){
            meta = {
                title : '',
                toolType : 'CHECK_BOXES',
                inline: false,
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                },
                checkBoxes : []
            }
        }
        else if(data === 'RADIO_BUTTONS' && this.isJson(datas)===false){
            meta = {
                title : '',
                toolType : 'RADIO_BUTTONS',
                multiple : false,
                inline: false,
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                },
                radios : []
            }
        }else if(data === 'PARAGRAPH' && this.isJson(datas)===false){
            meta = {
                title : '',
                toolType : 'PARAGRAPH',
                content : '',
                textColor : '',
                backgroundColor : '',
                color : '',
                fontSize : '',
                align : ''
            }
        }else{
            meta=JSON.parse(datas);
        }
        //console.log(data)
        let fields = this.state.fields;
        fields.push(meta);
        this.setState({
            dragActive : false,
            fields : fields
        });
        this.resetStateOrder();
        this.nameDuplicateReflector();
    }
}

export default FormContainer;
